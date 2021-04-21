'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class qualityOfLifeIndexByCountries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  qualityOfLifeIndexByCountries.init({
    country: DataTypes.STRING,
    qualityOfLifeIndex: DataTypes.FLOAT,
    purchasingPowerIndex: DataTypes.FLOAT,
    safetyIndex: DataTypes.FLOAT,
    healthCareIndex: DataTypes.FLOAT,
    costofLivingIndex: DataTypes.FLOAT,
    propertyPricetoIncomeRatio: DataTypes.FLOAT,
    trafficCommuteTimeIndex: DataTypes.FLOAT,
    pollutionIndex: DataTypes.FLOAT,
    climateIndex: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'qualityOfLifeIndexByCountries',
  });
  return qualityOfLifeIndexByCountries;
};