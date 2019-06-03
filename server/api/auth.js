const express = require("express");
const { User } = require("../db")

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(501).send("there is nothing here yet");
});

module.exports = router;
