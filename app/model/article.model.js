const { Sequelize,DataTypes  } = require("sequelize");
const userModel = require("./user.model");
module.exports = (sequelize) => {
  const Article = sequelize.define("articles", {
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
  return Article;
}