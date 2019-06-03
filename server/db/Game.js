const Sequelize = require("sequelize");
const db = require("./db");

const Game = db.define("Game", {
  winner: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Game;
