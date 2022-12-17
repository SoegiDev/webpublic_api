const { Sequelize,DataTypes  } = require("sequelize");
const newModel = require("./article.model");
const tagModel = require("./tag.model");
module.exports = (sequelize) => {
    const NewTags = sequelize.define("article_tags", {
        tagId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'tags', // 'Movies' would also work
              key: 'id'
            }
          },
        articleId: {
            type: DataTypes.UUID,
            references: {
              model: 'articles', // 'Actors' would also work
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
  
    return NewTags;
  };



  