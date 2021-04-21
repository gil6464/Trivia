'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countryPropertiesPriceIndex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  countryPropertiesPriceIndex.init({
    country: DataTypes.STRING,
    priceToIncomeRatio: DataTypes.FLOAT,
    grossRentalYieldCityCentre: DataTypes.FLOAT,
    grossRentalYieldOutsideCityCentre: DataTypes.FLOAT,
    priceToRentRatioCityCentre: DataTypes.FLOAT,
    priceToRentRatioOutsideCityCentre: DataTypes.FLOAT,
    mortgageAsPercentageOfIncome: DataTypes.FLOAT,
    affordabilityIndex: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'countryPropertiesPriceIndex',
  });
  return countryPropertiesPriceIndex;
};