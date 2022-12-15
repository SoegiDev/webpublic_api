const { Sequelize,DataTypes  } = require("sequelize");

module.exports = (sequelize) => {
  const Director = sequelize.define("director", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    }
  });
  return Director;
};
