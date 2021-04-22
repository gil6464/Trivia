const { countryMain } = require("./models");
const { Op } = require("sequelize");

// Get country that name is Switzerland
// countryMain.findOne({ where: { country: "Switzerland" } }).then(country => {
//   console.log(country.toJSON());
// });

// Get country that GDP > 35000
countryMain.findAll({ where: { GDP: { [Op.gte]: 35000 } } }).then(countries => {
  console.log(countries.map(country => console.log(country.toJSON())));
});
