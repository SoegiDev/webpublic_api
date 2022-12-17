const Sequelize = require("sequelize");
module.exports = {
    HOST: "103.187.146.246",
    USER: "postgres",
    PASSWORD: "password",
    DB: "web_public",
    PORT:5437,
    dialect: "postgres",
    pool: {
      max: 25,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };