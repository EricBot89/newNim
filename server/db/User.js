const Sequelize = require("sequelize");
const { db } = require("./");

const User = db.define("User", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: Sequelize.STRING,
  googleId: Sequelize.STRING,
  email: {
    type: Sequelize.EMAIL,
    validate: {
      isEmail: true
    }
  }
});

module.exports = User;
