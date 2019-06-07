const express = require("express");
const volleyball = require("volleyball");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const { db, User } = require("./db");
const { auth, stats } = require("./api");

const server = express();
const PORT = 8080;

const APP_CORE = path.join(__dirname, "..", "public", "index.html");

server.use(volleyball);
server.use(express.json());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(
  session({
    secret:
      "nRPSu67#U+m%8WD@meGR*ED6rdFs4#ZFuJfOKkX68EcIx%#e6@pViN)2JJ3iPsfyc8EG(lTE9$cwJB6sPOHpE+MoVW($q#!^4km2g5QrViEGvn4WMqF8FIA(YyA!1UxZ3bRsk&8QEsrjE0W%YeC+J+A0261^(i^!zN*w&*QzoU@OE!WNKoa$*0xD9+fIt608If1J%qyrpehmuKm^31Y5QWR3llg!j030CBWAJ@wl74*k@^^mPvL8b132vl+cFwi#",
    resave: false,
    saveUninitialized: false
  })
);

server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
  const strId = String(id);
  const user = await User.findOne({
    where: {
    googleId: strId 
    }
  });
  done(null,user);
} catch(error){
  done(error)
}
});

server.use(express.static(path.join(__dirname, "..", "public")));

server.use("/auth", auth);
server.use("/stats", stats);

server.get("/*", (req, res, next) => {

  res.status(200).sendFile(APP_CORE);
});

function init() {
  db.sync({ force: true });
  server.listen(PORT, () => {
    console.log(` -- the server is listning on ${PORT} -- `);
  });
}

init();
