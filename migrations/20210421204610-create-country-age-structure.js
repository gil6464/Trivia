'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countryAgeStructures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      age0To14: {
        type: Sequelize.INTEGER
      },
      age15To65: {
        type: Sequelize.INTEGER
      },
      age65AndAbove: {
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
    await queryInterface.dropTable('countryAgeStructures');
  }
};