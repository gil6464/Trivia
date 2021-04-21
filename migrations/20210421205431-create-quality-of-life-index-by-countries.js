'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('qualityOfLifeIndexByCountries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      qualityOfLifeIndex: {
        type: Sequelize.FLOAT
      },
      purchasingPowerIndex: {
        type: Sequelize.FLOAT
      },
      safetyIndex: {
        type: Sequelize.FLOAT
      },
      healthCareIndex: {
        type: Sequelize.FLOAT
      },
      costofLivingIndex: {
        type: Sequelize.FLOAT
      },
      propertyPricetoIncomeRatio: {
        type: Sequelize.FLOAT
      },
      trafficCommuteTimeIndex: {
        type: Sequelize.FLOAT
      },
      pollutionIndex: {
        type: Sequelize.FLOAT
      },
      climateIndex: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('qualityOfLifeIndexByCountries');
  }
};