const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("User", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  googleId: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

module.exports = User;
