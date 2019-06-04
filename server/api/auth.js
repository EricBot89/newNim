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
    successRedirect: "/profile",
    failureRedirect: "/"
  })
);

router.get("/me", (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  }
  res.status(404).send(false);
});

module.exports = router;
