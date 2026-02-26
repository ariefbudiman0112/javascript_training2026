'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo);
    }
  }
  User.init({
    username: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Username cannot be empty'
        }
      }
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          message: 'Email must be a valid email address'
        },notEmpty: {
          message: 'Email cannot be empty'
        }
      }
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Password cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};