'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post) 
    }
  };

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: {
      type:DataTypes.STRING,
      allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    profession: DataTypes.STRING,
    profilePhoto: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};