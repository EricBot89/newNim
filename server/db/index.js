const db = require("./db");
const User = require("./User");
const Game = require("./Game");

User.hasMany(Game);
Game.belongsToMany(User, {through:"playedGames"});

module.exports = {
  db,
  User,
  Game
};
