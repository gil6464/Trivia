"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable(
      "countrycrimeindices",
      "countrycrimeindex"
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable(
      "countrycrimeindex",
      "countrycrimeindices"
    );
  },
};
