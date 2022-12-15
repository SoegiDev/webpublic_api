const { Sequelize,DataTypes  } = require("sequelize");

module.exports = (sequelize) => {
  const Roles = sequelize.define("settings", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    header: {
        type: Sequelize.STRING
    },
    footer: {
        type: Sequelize.STRING
    },
    createdBy: {
        type: Sequelize.STRING
    },
    version: {
        type: Sequelize.STRING
    },
    noted: {
        type: Sequelize.STRING
    },
    parameter: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    support:{
        type:Sequelize.STRING
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
      },
  
});

return Roles;
};
