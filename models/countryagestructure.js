'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countryAgeStructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  countryAgeStructure.init({
    country: DataTypes.STRING,
    age0To14: DataTypes.INTEGER,
    age15To65: DataTypes.INTEGER,
    age65AndAbove: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'countryAgeStructure',
  });
  return countryAgeStructure;
};