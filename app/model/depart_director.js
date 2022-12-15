const { Sequelize,DataTypes  } = require("sequelize");
module.exports = (sequelize) => {
    const departDirector = sequelize.define("departments_directors", {
        departmentId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'departments', // 'Movies' would also work
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
  
    return departDirector;
  };



  