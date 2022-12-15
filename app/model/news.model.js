const { Sequelize,DataTypes  } = require("sequelize");

module.exports = (sequelize) => {
  const Roles = sequelize.define("news", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    },
    tags: {
      type: DataTypes.TEXT,
      defaultValue:null
    },
    content: {
      type: DataTypes.TEXT,
      defaultValue:null
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    userId:{
      type: DataTypes.UUID,
        references: {
          model: 'users', // 'Actors' would also work
          key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
      }
});

return Roles;
};
