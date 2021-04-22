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

function createQuestion() {
  let country1 = getRandomCountry();
  let country2 = getRandomCountry();
  if (country1 === country2) {
    //If they are the same then shuffle them both
    country1 = getRandomCountry();
    country2 = getRandomCountry();
  }

  let question = {};
  question.firstCountry = country1;
  question.secondCountry = country2;
}

function getRandomCountry() {
  // get
  //todo get random country function
  return "";
}
