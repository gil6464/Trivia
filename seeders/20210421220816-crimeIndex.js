"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "countrycrimeindex",
      [
        {
          country: "Venezuela",
          crimeIndex: 84.49,
          safetyIndex: 15.51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Papua New Guinea",
          crimeIndex: 81.93,
          safetyIndex: 18.07,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "South Africa",
          crimeIndex: 77.49,
          safetyIndex: 22.51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Afghanistan",
          crimeIndex: 76.23,
          safetyIndex: 23.77,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Honduras",
          crimeIndex: 76.11,
          safetyIndex: 23.89,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Trinidad And Tobago",
          crimeIndex: 73.19,
          safetyIndex: 26.81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Brazil",
          crimeIndex: 68.88,
          safetyIndex: 31.12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Peru",
          crimeIndex: 68.15,
          safetyIndex: 31.85,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "El Salvador",
          crimeIndex: 67.96,
          safetyIndex: 32.04,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Guyana",
          crimeIndex: 67.66,
          safetyIndex: 32.34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Namibia",
          crimeIndex: 67.21,
          safetyIndex: 32.79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Syria",
          crimeIndex: 66.46,
          safetyIndex: 33.54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Jamaica",
          crimeIndex: 66.04,
          safetyIndex: 33.96,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Puerto Rico",
          crimeIndex: 65.63,
          safetyIndex: 34.37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Angola",
          crimeIndex: 64.97,
          safetyIndex: 35.03,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Bangladesh",
          crimeIndex: 63.94,
          safetyIndex: 36.06,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Nigeria",
          crimeIndex: 63.77,
          safetyIndex: 36.23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Bahamas",
          crimeIndex: 62.86,
          safetyIndex: 37.14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Libya",
          crimeIndex: 62.19,
          safetyIndex: 37.81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Kazakhstan",
          crimeIndex: 62.02,
          safetyIndex: 37.98,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Argentina",
          crimeIndex: 61.77,
          safetyIndex: 38.23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Kenya",
          crimeIndex: 61.66,
          safetyIndex: 38.34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Dominican Republic",
          crimeIndex: 61.16,
          safetyIndex: 38.84,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Uganda",
          crimeIndex: 59,
          safetyIndex: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Tanzania",
          crimeIndex: 58.95,
          safetyIndex: 41.05,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Fiji",
          crimeIndex: 58.92,
          safetyIndex: 41.08,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Malaysia",
          crimeIndex: 58.84,
          safetyIndex: 41.16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Somalia",
          crimeIndex: 58.5,
          safetyIndex: 41.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Mongolia",
          crimeIndex: 57.97,
          safetyIndex: 42.03,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Guatemala",
          crimeIndex: 57.83,
          safetyIndex: 42.17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Zimbabwe",
          crimeIndex: 57.47,
          safetyIndex: 42.53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Costa Rica",
          crimeIndex: 56.33,
          safetyIndex: 43.67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Colombia",
          crimeIndex: 54.79,
          safetyIndex: 45.21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Mexico",
          crimeIndex: 53.97,
          safetyIndex: 46.03,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Uruguay",
          crimeIndex: 53.81,
          safetyIndex: 46.19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Botswana",
          crimeIndex: 53.49,
          safetyIndex: 46.51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Maldives",
          crimeIndex: 53.21,
          safetyIndex: 46.79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Bolivia",
          crimeIndex: 52.93,
          safetyIndex: 47.07,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Ecuador",
          crimeIndex: 50.9,
          safetyIndex: 49.1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Cambodia",
          crimeIndex: 50.66,
          safetyIndex: 49.34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Algeria",
          crimeIndex: 49.81,
          safetyIndex: 50.19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Paraguay",
          crimeIndex: 49.6,
          safetyIndex: 50.4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Iran",
          crimeIndex: 49.25,
          safetyIndex: 50.75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Ethiopia",
          crimeIndex: 49.21,
          safetyIndex: 50.79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Ghana",
          crimeIndex: 48.97,
          safetyIndex: 51.03,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Ukraine",
          crimeIndex: 48.85,
          safetyIndex: 51.15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Morocco",
          crimeIndex: 48.69,
          safetyIndex: 51.31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Iraq",
          crimeIndex: 47.78,
          safetyIndex: 52.22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Mauritius",
          crimeIndex: 47.33,
          safetyIndex: 52.67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "United States",
          crimeIndex: 47.2,
          safetyIndex: 52.8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Panama",
          crimeIndex: 47.19,
          safetyIndex: 52.81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Sweden",
          crimeIndex: 47.07,
          safetyIndex: 52.93,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Egypt",
          crimeIndex: 46.92,
          safetyIndex: 53.08,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "France",
          crimeIndex: 46.79,
          safetyIndex: 53.21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Myanmar",
          crimeIndex: 45.86,
          safetyIndex: 54.14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Indonesia",
          crimeIndex: 45.84,
          safetyIndex: 54.16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Ireland",
          crimeIndex: 45.43,
          safetyIndex: 54.57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Vietnam",
          crimeIndex: 45.35,
          safetyIndex: 54.65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Chile",
          crimeIndex: 45.23,
          safetyIndex: 54.77,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Moldova",
          crimeIndex: 44.98,
          safetyIndex: 55.02,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Nicaragua",
          crimeIndex: 44.44,
          safetyIndex: 55.56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Italy",
          crimeIndex: 44.26,
          safetyIndex: 55.74,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Pakistan",
          crimeIndex: 44.08,
          safetyIndex: 55.92,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Belgium",
          crimeIndex: 43.98,
          safetyIndex: 56.02,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "United Kingdom",
          crimeIndex: 43.71,
          safetyIndex: 56.29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Palestine",
          crimeIndex: 43.59,
          safetyIndex: 56.41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Lebanon",
          crimeIndex: 43.36,
          safetyIndex: 56.64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "India",
          crimeIndex: 43.32,
          safetyIndex: 56.68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Bosnia And Herzegovina",
          crimeIndex: 43.03,
          safetyIndex: 56.97,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Philippines",
          crimeIndex: 42.16,
          safetyIndex: 57.84,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Tunisia",
          crimeIndex: 41.88,
          safetyIndex: 58.12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Australia",
          crimeIndex: 41.36,
          safetyIndex: 58.64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Montenegro",
          crimeIndex: 41.18,
          safetyIndex: 58.82,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Russia",
          crimeIndex: 41.12,
          safetyIndex: 58.88,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "New Zealand",
          crimeIndex: 40.93,
          safetyIndex: 59.07,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Jordan",
          crimeIndex: 40.83,
          safetyIndex: 59.17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Thailand",
          crimeIndex: 40.48,
          safetyIndex: 59.52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Greece",
          crimeIndex: 40.32,
          safetyIndex: 59.68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Sri Lanka",
          crimeIndex: 40.22,
          safetyIndex: 59.78,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Canada",
          crimeIndex: 39.67,
          safetyIndex: 60.33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Albania",
          crimeIndex: 39.52,
          safetyIndex: 60.48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Turkey",
          crimeIndex: 39.49,
          safetyIndex: 60.51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Malta",
          crimeIndex: 39.04,
          safetyIndex: 60.96,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "North Macedonia",
          crimeIndex: 38.67,
          safetyIndex: 61.33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Bulgaria",
          crimeIndex: 38.5,
          safetyIndex: 61.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Serbia",
          crimeIndex: 37.41,
          safetyIndex: 62.59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Latvia",
          crimeIndex: 36.95,
          safetyIndex: 63.05,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Norway",
          crimeIndex: 35.43,
          safetyIndex: 64.57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Hungary",
          crimeIndex: 35.08,
          safetyIndex: 64.92,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Germany",
          crimeIndex: 34.81,
          safetyIndex: 65.19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Kuwait",
          crimeIndex: 34.75,
          safetyIndex: 65.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Nepal",
          crimeIndex: 34.56,
          safetyIndex: 65.44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Luxembourg",
          crimeIndex: 33.39,
          safetyIndex: 66.61,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Lithuania",
          crimeIndex: 33.06,
          safetyIndex: 66.94,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Kosovo (Disputed Territory)",
          crimeIndex: 32.91,
          safetyIndex: 67.09,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Spain",
          crimeIndex: 31.96,
          safetyIndex: 68.04,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "China",
          crimeIndex: 31.83,
          safetyIndex: 68.17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Azerbaijan",
          crimeIndex: 31.61,
          safetyIndex: 68.39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Singapore",
          crimeIndex: 30.57,
          safetyIndex: 69.43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Cyprus",
          crimeIndex: 30.01,
          safetyIndex: 69.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Portugal",
          crimeIndex: 29.63,
          safetyIndex: 70.37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Israel",
          crimeIndex: 29.6,
          safetyIndex: 70.4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Bahrain",
          crimeIndex: 29.29,
          safetyIndex: 70.71,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Slovakia",
          crimeIndex: 29.22,
          safetyIndex: 70.78,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Poland",
          crimeIndex: 28.5,
          safetyIndex: 71.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "South Korea",
          crimeIndex: 28.02,
          safetyIndex: 71.98,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Brunei",
          crimeIndex: 27.68,
          safetyIndex: 72.32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Romania",
          crimeIndex: 27.64,
          safetyIndex: 72.36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Netherlands",
          crimeIndex: 27.62,
          safetyIndex: 72.38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Cuba",
          crimeIndex: 27.45,
          safetyIndex: 72.55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Saudi Arabia",
          crimeIndex: 26.18,
          safetyIndex: 73.82,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Czech Republic",
          crimeIndex: 25.52,
          safetyIndex: 74.48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Denmark",
          crimeIndex: 25.1,
          safetyIndex: 74.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Belarus",
          crimeIndex: 24.99,
          safetyIndex: 75.01,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Croatia",
          crimeIndex: 24.71,
          safetyIndex: 75.29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Austria",
          crimeIndex: 23.73,
          safetyIndex: 76.27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Iceland",
          crimeIndex: 23.36,
          safetyIndex: 76.64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Finland",
          crimeIndex: 23.32,
          safetyIndex: 76.68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Estonia",
          crimeIndex: 23.14,
          safetyIndex: 76.86,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Armenia",
          crimeIndex: 21.6,
          safetyIndex: 78.4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Switzerland",
          crimeIndex: 21.6,
          safetyIndex: 78.4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Slovenia",
          crimeIndex: 21.07,
          safetyIndex: 78.93,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Oman",
          crimeIndex: 20.79,
          safetyIndex: 79.21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Hong Kong",
          crimeIndex: 20.7,
          safetyIndex: 79.3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Japan",
          crimeIndex: 20.66,
          safetyIndex: 79.34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Georgia",
          crimeIndex: 20.21,
          safetyIndex: 79.79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "United Arab Emirates",
          crimeIndex: 15.7,
          safetyIndex: 84.3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Taiwan",
          crimeIndex: 15.65,
          safetyIndex: 84.35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          country: "Qatar",
          crimeIndex: 11.86,
          safetyIndex: 88.14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countrycrimeindex", null, {});
  },
};
