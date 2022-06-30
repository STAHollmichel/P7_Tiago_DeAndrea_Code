'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
      Comment.belongsTo(models.Post, { foreignKey: 'postId' })
    }
  }
  Comment.init({
    userId: {
      Type: DataTypes.INTEGER,
      allowNull: false
    },
    postId: {
      Type: DataTypes.INTEGER,
      allowNull: false
    },
    commentDescription: {
      Type: DataTypes.TEXT,
      allowNull: false
    },
  }, 
  {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};