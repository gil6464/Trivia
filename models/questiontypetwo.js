'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questiontypetwo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  questiontypetwo.init({
    template: DataTypes.STRING,
    column: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'questiontypetwo',
  });
  return questiontypetwo;
};