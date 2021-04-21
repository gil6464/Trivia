'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countryPopulationDensity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  countryPopulationDensity.init({
    country: DataTypes.STRING,
    rank: DataTypes.INTEGER,
    area: DataTypes.FLOAT,
    population: DataTypes.INTEGER,
    populationDensity: DataTypes.INTEGER,
    dateOfMeasure: DataTypes.DATE,
    populationSource: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'countryPopulationDensity',
  });
  return countryPopulationDensity;
};