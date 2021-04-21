'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countriesGeneral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  countriesGeneral.init({
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    coastline: DataTypes.STRING,
    netMigration: DataTypes.INTEGER,
    infantMortality: DataTypes.INTEGER,
    GDP: DataTypes.INTEGER,
    literacy: DataTypes.FLOAT,
    phones: DataTypes.FLOAT,
    arable: DataTypes.FLOAT,
    crops: DataTypes.FLOAT,
    other: DataTypes.FLOAT,
    climate: DataTypes.INTEGER,
    birthrate: DataTypes.FLOAT,
    deathrate: DataTypes.FLOAT,
    agriculture: DataTypes.FLOAT,
    industry: DataTypes.FLOAT,
    service: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'countriesGeneral',
  });
  return countriesGeneral;
};