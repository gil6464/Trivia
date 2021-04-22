"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class countryMain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  countryMain.init(
    {
      country: DataTypes.STRING,
      rentIndex: DataTypes.FLOAT,
      costOfLivingPlusrentIndex: DataTypes.FLOAT,
      continent: DataTypes.STRING,
      capital: DataTypes.STRING,
      region: DataTypes.STRING,
      coastline: DataTypes.FLOAT,
      age0To14: DataTypes.FLOAT,
      crimeIndex: DataTypes.FLOAT,
      phones: DataTypes.FLOAT,
      GDP: DataTypes.FLOAT,
      costOfLivingIndex: DataTypes.FLOAT,
      populationDensity: DataTypes.FLOAT,
      qualityOfLifeIndex: DataTypes.FLOAT,
      population: DataTypes.INTEGER,
      area: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "countryMain",
    }
  );
  return countryMain;
};
