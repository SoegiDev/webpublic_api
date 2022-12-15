const { Sequelize,DataTypes  } = require("sequelize");
module.exports = (sequelize) => {
  const Division = sequelize.define("division", {
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

  return Division;
};
