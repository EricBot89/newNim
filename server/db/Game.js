const Sequelize = require("sequelize");
const { db } = require("./");

const Game = db.define("Game", {
  winner: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Game;
