'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countryPropertiesPriceIndices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      priceToIncomeRatio: {
        type: Sequelize.FLOAT
      },
      grossRentalYieldCityCentre: {
        type: Sequelize.FLOAT
      },
      grossRentalYieldOutsideCityCentre: {
        type: Sequelize.FLOAT
      },
      priceToRentRatioCityCentre: {
        type: Sequelize.FLOAT
      },
      priceToRentRatioOutsideCityCentre: {
        type: Sequelize.FLOAT
      },
      mortgageAsPercentageOfIncome: {
        type: Sequelize.FLOAT
      },
      affordabilityIndex: {
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
    await queryInterface.dropTable('countryPropertiesPriceIndices');
  }
};