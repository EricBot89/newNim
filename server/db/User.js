const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("User", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: Sequelize.STRING,
  googleId: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

module.exports = User;
