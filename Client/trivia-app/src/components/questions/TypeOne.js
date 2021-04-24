let mockQ = {
  id: 42,
  template: "Which country is the least densely populated?",
  column: "populationDensity",
  max: false,
  createdAt: "2021-04-23T07:51:07.000Z",
  updatedAt: "2021-04-23T07:51:07.000Z",
  countries: [
    {
      id: 281,
      country: "New Zealand",
      rentIndex: 32.09,
      costOfLivingPlusrentIndex: 53.19,
      continent: "Australia",
      capital: "Wellington",
      region: "OCEANIA                            ",
      coastline: 563,
      age0To14: 20,
      crimeIndex: 40.93,
      phones: 4417,
      GDP: 21600,
      costOfLivingIndex: 72.53,
      populationDensity: 18,
      qualityOfLifeIndex: 181.02,
      population: 4971205,
      area: 270467,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
    {
      id: 274,
      country: "South Korea",
      rentIndex: 22.86,
      costOfLivingPlusrentIndex: 51.72,
      continent: "Asia",
      capital: "Seoul",
      region: null,
      coastline: null,
      age0To14: 14,
      crimeIndex: 28.02,
      phones: null,
      GDP: null,
      costOfLivingIndex: 78.18,
      populationDensity: 517,
      qualityOfLifeIndex: 139.02,
      population: 51780579,
      area: 100210,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
    {
      id: 288,
      country: "Canada",
      rentIndex: 30.73,
      costOfLivingPlusrentIndex: 49.98,
      continent: "Central America",
      capital: "Ottawa",
      region: "NORTHERN AMERICA                   ",
      coastline: 202,
      age0To14: 16,
      crimeIndex: 39.67,
      phones: 5522,
      GDP: 29800,
      costOfLivingIndex: 67.62,
      populationDensity: 4,
      qualityOfLifeIndex: 163.47,
      population: 37961548,
      area: 9984670,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
    {
      id: 269,
      country: "Denmark",
      rentIndex: 31.92,
      costOfLivingPlusrentIndex: 58.57,
      continent: "Europe",
      capital: "Copenhagen",
      region: "WESTERN EUROPE                     ",
      coastline: 1697,
      age0To14: 17,
      crimeIndex: 25.1,
      phones: 6146,
      GDP: 31100,
      costOfLivingIndex: 83,
      populationDensity: 135,
      qualityOfLifeIndex: 192.67,
      population: 5814461,
      area: 43098,
      createdAt: "2021-04-23T07:51:07.000Z",
      updatedAt: "2021-04-23T07:51:07.000Z",
    },
  ],
  correct: "Canada",
};

function TypeOne({ updateCounter, updateCounterIncorrect }) {
  //Added a wrapper to correct function since we need to use updateCounter function which passes from HOME PAGE
  const correctWrapper = () => {
    correct();
    updateCounter();
  };

  const inCorrectWrapper = () => {
    inCorrect();
    updateCounterIncorrect();
  };

  let buttonArray = [];
  for (let country of mockQ.countries) {
    if (country.country === mockQ.correct) {
      buttonArray.push(
        <button key={getNewKey()} onClick={() => correctWrapper()}>
          {country.country}
        </button>
      );
    } else {
      buttonArray.push(
        <button key={getNewKey()} onClick={() => inCorrectWrapper()}>
          {country.country}
        </button>
      );
    }
  }

  return (
    <div className="TypeOne">
      <h1>{mockQ.template}</h1>
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

const getNewQuestion = () => {};

export default TypeOne;
