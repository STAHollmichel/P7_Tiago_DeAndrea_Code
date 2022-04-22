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
  };
  Post.init({
    userId: {
      type:DataTypes.INTEGER,
            allowNull: false
    },
    postTittle: DataTypes.TEXT,
    postDescription: DataTypes.TEXT,
    postPhoto: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};