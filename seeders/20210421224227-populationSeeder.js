"use strict";
const populationData = require("../Data organizing/population");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "countrypopulationdensities",
      populationData,
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countrypopulationdensities", null, {});
  },
};
