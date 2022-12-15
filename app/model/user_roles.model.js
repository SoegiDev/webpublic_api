const { Sequelize,DataTypes  } = require("sequelize");
const roleModel = require("./role.model");
const userModel = require("./user.model");
module.exports = (sequelize) => {
    const UserRoles = sequelize.define("user_roles", {
        roleId: {
            type: DataTypes.INTEGER,
            references: {
              model: roleModel, // 'Movies' would also work
              key: 'id'
            }
          },
        userId: {
            type: DataTypes.UUID,
            references: {
              model: userModel, // 'Actors' would also work
              key: 'id'
            }
        },        
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: true
          },
          
    });
  
    return UserRoles;
  };



  