'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countryMains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      rentIndex: {
        type: Sequelize.FLOAT
      },
      costOfLivingPlusrentIndex: {
        type: Sequelize.FLOAT
      },
      continent: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      coastline: {
        type: Sequelize.FLOAT
      },
      age0To14: {
        type: Sequelize.FLOAT
      },
      crimeIndex: {
        type: Sequelize.FLOAT
      },
      phones: {
        type: Sequelize.FLOAT
      },
      GDP: {
        type: Sequelize.FLOAT
      },
      costOfLivingIndex: {
        type: Sequelize.FLOAT
      },
      populationDensity: {
        type: Sequelize.FLOAT
      },
      qualityOfLifeIndex: {
        type: Sequelize.FLOAT
      },
      population: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('countryMains');
  }
};