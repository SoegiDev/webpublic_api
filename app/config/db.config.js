const Sequelize = require("sequelize");
module.exports = {
    HOST: "103.187.146.183",
    USER: "postgres",
    PASSWORD: "fajarsoegi1901",
    DB: "company_profile",
    dialect: "postgres",
    pool: {
      max: 25,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };