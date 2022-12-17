const { Sequelize,DataTypes  } = require("sequelize");
module.exports = (sequelize) => {
  const Tags = sequelize.define("tags", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING
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
  return Tags;
}