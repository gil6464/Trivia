'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countryHealthcareIndex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  countryHealthcareIndex.init({
    country: DataTypes.STRING,
    healthCareIndex: DataTypes.FLOAT,
    healthCareExpIndex: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'countryHealthcareIndex',
  });
  return countryHealthcareIndex;
};