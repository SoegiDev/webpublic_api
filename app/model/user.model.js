const { Sequelize,DataTypes  } = require("sequelize");
module.exports = (sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        idEmployee: {
            type: DataTypes.STRING
        },
        officeNumber: {
            type: DataTypes.STRING
        },
        password: {
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
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        isOwner: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        isDirector: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        isCommissioner: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        isManager: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        isEmployee: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue:true
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        divisionId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'divisions', // 'Actors' would also work
              key: 'id'
            }
        },
        directorId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'directors', // 'Actors' would also work
              key: 'id'
            }
        },
        departmentId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'departments', // 'Actors' would also work
              key: 'id'
            }
        }
    });
    return User;
  };


  