'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questiontypeone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  questiontypeone.init({
    template: DataTypes.STRING,
    column: DataTypes.STRING,
    max: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'questiontypeone',
  });
  return questiontypeone;
};