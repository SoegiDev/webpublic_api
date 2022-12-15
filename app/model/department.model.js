const { Sequelize,DataTypes  } = require("sequelize");
module.exports = (sequelize) => {
  const Department = sequelize.define("department", {
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

  return Department;
};
