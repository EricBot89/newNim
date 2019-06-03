const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/nimdb", { logging: false });

module.exports = db;
