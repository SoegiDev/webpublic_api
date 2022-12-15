const { Sequelize,DataTypes  } = require("sequelize");
module.exports = (sequelize) => {
    const DivDepart = sequelize.define("division_departments", {
        departmentId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'departments', // 'Movies' would also work
              key: 'id'
            }
          },
        divisionId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'divisions', // 'Actors' would also work
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
  
    return DivDepart;
  };



  