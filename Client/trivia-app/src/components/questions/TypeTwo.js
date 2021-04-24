let mockQ = {
  id: 17,
  template: "How many people live in",
  column: "population",
  createdAt: "2021-04-23T07:51:07.000Z",
  updatedAt: "2021-04-23T07:51:07.000Z",
  countries: [
    {
      id: 385,
      country: "Egypt",
      rentIndex: 5.49,
      costOfLivingPlusrentIndex: 18.04,
      continent: "Africa",
      capital: "Cairo",
      region: "NORTHERN AFRICA                    ",
      coastline: 24,
      age0To14: 34,
      crimeIndex: 46.92,
      phones: 1318,
      GDP: 4000,
      costOfLivingIndex: 29.54,
      populationDensity: 100,
      qualityOfLifeIndex: 86.54,
      population: 100138465,
      area: 1002450,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
    {
      id: 296,
      country: "United Arab Emirates",
      rentIndex: 41.07,
      costOfLivingPlusrentIndex: 51.98,
      continent: "Asia",
      capital: "Abu Dhabi",
      region: "NEAR EAST                          ",
      coastline: 159,
      age0To14: 14,
      crimeIndex: 15.7,
      phones: 4753,
      GDP: 23200,
      costOfLivingIndex: 61.98,
      populationDensity: 117,
      qualityOfLifeIndex: 156.67,
      population: 9770529,
      area: 83600,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
    {
      id: 362,
      country: "Serbia",
      rentIndex: 9.08,
      costOfLivingPlusrentIndex: 22.98,
      continent: "Europe",
      capital: "Belgrade",
      region: "EASTERN EUROPE                     ",
      coastline: 0,
      age0To14: 17,
      crimeIndex: 37.41,
      phones: 2858,
      GDP: 2200,
      costOfLivingIndex: 35.72,
      populationDensity: 89,
      qualityOfLifeIndex: 116.3,
      population: 6901188,
      area: 77474,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
    {
      id: 352,
      country: "Peru",
      rentIndex: 12.78,
      costOfLivingPlusrentIndex: 26.28,
      continent: "South America",
      capital: "Lima",
      region: "LATIN AMER. & CARIB    ",
      coastline: 19,
      age0To14: 27,
      crimeIndex: 68.15,
      phones: 795,
      GDP: 5100,
      costOfLivingIndex: 38.65,
      populationDensity: 25,
      qualityOfLifeIndex: 85.46,
      population: 32162184,
      area: 1285220,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
  ],
  correct: 6901188,
  askOn: "Serbia",
};

function TypeTwo({ updateCounter }) {
  //Added a wrapper to correct function since we need to use updateCounter function which passes from HOME PAGE
  const correctWrapper = () => {
    correct();
    updateCounter();
  };

  const inCorrectWrapper = () => {
    inCorrect();
  };

  let buttonArray = [];
  for (let country of mockQ.countries) {
    if (country.country === mockQ.askOn) {
      buttonArray.push(
        <button key={getNewKey()} onClick={() => correctWrapper()}>
          {country[mockQ.column]}
        </button>
      );
    } else {
      buttonArray.push(
        <button key={getNewKey()} onClick={() => inCorrectWrapper()}>
          {country[mockQ.column]}
        </button>
      );
    }
  }

  return (
    <div className="TypeOne">
      <h1>
        {mockQ.template} {mockQ.askOn}
      </h1>
      {buttonArray}
    </div>
  );
}

const correct = () => {
  console.log("correct");
};

const inCorrect = () => {
  console.log("inCorrect");
};

const getNewKey = () => {
  return 1000000 + Math.floor(Math.random() * 9000000);
};

export default TypeTwo;
