const { Sequelize,DataTypes  } = require("sequelize");
module.exports = (sequelize) => {
    const UserProfile = sequelize.define("user_profile", {
        nick_name: {
            type: DataTypes.STRING
        },
        full_name: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.STRING
        },
        idCard: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
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
        userId: {
            type: DataTypes.UUID,
            references: {
              model: 'users',
              key: 'id'
            }
          }
    });
  
    return UserProfile;
  };


  