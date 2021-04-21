'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class costOfLiving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  costOfLiving.init({
    country: DataTypes.STRING,
    costOfLivingIndex: DataTypes.FLOAT,
    rentIndex: DataTypes.FLOAT,
    costOfLivingPlusrentIndex: DataTypes.FLOAT,
    groceriesIndex: DataTypes.FLOAT,
    restaurantPriceIndex: DataTypes.FLOAT,
    localPurchasingPowerIndex: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'costOfLiving',
  });
  return costOfLiving;
};