import axios from "axios";
import React, { useState, useEffect } from "react";

let mockQ = {
  id: 2,
  question: "Which country is the largest by total area?",
  column: "area",
  correct: "Kazakhstan",
  rating: 1.2,
  ratingCounter: 5,
  option1: "Zambia",
  option2: "Kazakhstan",
  option3: "Costa Rica",
  option4: "Dominican Republic",
};
//   createdAt: "2021-04-23T09:59:00.000Z",
//   updatedAt: "2021-04-23T10:01:34.000Z",

function SavedQuestion({
  updateCounter,
  updateCounterIncorrect,
  setQuestionType,
}) {
  const [question, setQuestion] = useState(undefined);

  const getSavedQuestions = async () => {
    const { data } = await axios.get("/savedquestion");
    setQuestion(data);
  };

  useEffect(() => {
    getSavedQuestions();
  }, []);
  //Added a wrapper to correct function since we need to use updateCounter function which passes from HOME PAGE
  const correctWrapper = () => {
    correct();
    updateCounter();
    setQuestionType(0);
  };

  const inCorrectWrapper = () => {
    inCorrect();
    updateCounterIncorrect();
    setQuestionType(0);
  };
  if (question) {
    let buttonArray = [];
    let countries = [
      question.option1,
      question.option2,
      question.option3,
      question.option4,
    ];
    for (let country of countries) {
      if (country === question.correct) {
        buttonArray.push(
          <button key={getNewKey()} onClick={() => correctWrapper()}>
            {country}
          </button>
        );
      } else {
        buttonArray.push(
          <button key={getNewKey()} onClick={() => inCorrectWrapper()}>
            {country}
          </button>
        );
      }
    }

    return (
      <div className="TypeOne">
        <h1>{question.question}</h1>
        {buttonArray}
        <div className="rating">
          <button onClick={() => rateQuestion(1)}>1</button>
          <button onClick={() => rateQuestion(2)}>2</button>
          <button onClick={() => rateQuestion(3)}>3</button>
          <button onClick={() => rateQuestion(4)}>4</button>
          <button onClick={() => rateQuestion(5)}>5</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TypeOne">
        <h1>Question is loading...</h1>
      </div>
    );
  }
}
// {key={getNewKey()}
const correct = () => {
  console.log("correct");
};

const inCorrect = () => {
  console.log("inCorrect");
};

const getNewKey = () => {
  return 1000000 + Math.floor(Math.random() * 9000000);
};

const rateQuestion = rate => {
  let id = 1;
  console.log(rate);
  //rate and id
};

export default SavedQuestion;
