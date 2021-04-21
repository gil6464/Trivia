'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countriesGenerals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      coastline: {
        type: Sequelize.STRING
      },
      netMigration: {
        type: Sequelize.INTEGER
      },
      infantMortality: {
        type: Sequelize.INTEGER
      },
      GDP: {
        type: Sequelize.INTEGER
      },
      literacy: {
        type: Sequelize.FLOAT
      },
      phones: {
        type: Sequelize.FLOAT
      },
      arable: {
        type: Sequelize.FLOAT
      },
      crops: {
        type: Sequelize.FLOAT
      },
      other: {
        type: Sequelize.FLOAT
      },
      climate: {
        type: Sequelize.INTEGER
      },
      birthrate: {
        type: Sequelize.FLOAT
      },
      deathrate: {
        type: Sequelize.FLOAT
      },
      agriculture: {
        type: Sequelize.FLOAT
      },
      industry: {
        type: Sequelize.FLOAT
      },
      service: {
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
    await queryInterface.dropTable('countriesGenerals');
  }
};