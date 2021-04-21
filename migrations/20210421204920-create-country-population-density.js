'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countryPopulationDensities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.FLOAT
      },
      population: {
        type: Sequelize.INTEGER
      },
      populationDensity: {
        type: Sequelize.INTEGER
      },
      dateOfMeasure: {
        type: Sequelize.DATE
      },
      populationSource: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('countryPopulationDensities');
  }
};