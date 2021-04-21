'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('costOfLivings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      costOfLivingIndex: {
        type: Sequelize.FLOAT
      },
      rentIndex: {
        type: Sequelize.FLOAT
      },
      costOfLivingPlusrentIndex: {
        type: Sequelize.FLOAT
      },
      groceriesIndex: {
        type: Sequelize.FLOAT
      },
      restaurantPriceIndex: {
        type: Sequelize.FLOAT
      },
      localPurchasingPowerIndex: {
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
    await queryInterface.dropTable('costOfLivings');
  }
};