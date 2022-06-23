'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId' })
      Post.hasMany(models.Comment) 
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    postTitle: DataTypes.TEXT,
    postDescription: DataTypes.TEXT,
    postPhoto: DataTypes.STRING,
    userLike: DataTypes.INTEGER,
    usersLiked: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};