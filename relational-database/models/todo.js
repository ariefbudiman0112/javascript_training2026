'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, { foreignKey: 'UserId' });
      Todo.belongsTo(models.Type, { foreignKey: 'TypeId' });
    }
  }
  Todo.init({
    task: { 
      type: DataTypes.STRING, 
      validate: {
        notEmpty: {
          message: 'Task cannot be empty'
        }
      }
    },
    status:{ 
      type: DataTypes.BOOLEAN, 
      validate: {
        notEmpty: {
          message: 'Status cannot be empty'
        }
      }
     },
    UserId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          message: 'UserId must be a number'
        }
      }
    },
    TypeId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          message: 'TypeId must be a number'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};