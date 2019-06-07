const express = require("express");
const passport = require("passport");
const { User } = require("../db");

const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.session.uid) {
    res.status(200).json({ auth: true });
  } else {
    res.status(403).json({ auth: false });
  }
});

router.get("/google-auth", passport.authenticate("google", { scope: "email" }));

router.get(
  "/google-auth/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

router.get("/me", async (req, res, next) => {
  res.json(req.user || {})
});

router.delete('/logout', (req, res, next) => {
  req.logout()
  req.session.destroy((err) => {
    if (err) return next(err)
    res.status(204).end()
  })
})

const GoogleStrat = require("passport-google-oauth").OAuth2Strategy;

passport.use(
  new GoogleStrat(
    {
      clientID:
        "872740096952-00jih1vjdr33lm4vq6ufln1golj5htd4.apps.googleusercontent.com",
      clientSecret: "586r_9E75ZCBgud6BwLKaMeT",
      callbackURL: "/auth/google-auth/callback"
    },

    async (token, refreshToken, profile, done) => {
      const { id, emails } = profile;
      const email = emails[0].value;
      const username = email.split("@")[0];
      try {
        const [user] = await User.findOrCreate({
          where: { googleId: id },
          defaults: { username, email }
        });
        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);


module.exports = router;
