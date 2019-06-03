const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/nimdb", { logging: false });
const User = require("./User");
const Game = require("./Game");

User.hasMany(Game);
Game.hasMany(User);

module.exports = {
  db,
  User,
  Game
};
