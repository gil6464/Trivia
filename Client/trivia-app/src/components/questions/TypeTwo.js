import axios from "axios";
import React, { useState, useEffect } from "react";

function TypeTwo({ updateCounter, updateCounterIncorrect, setQuestionType }) {
  //Added a wrapper to correct function since we need to use updateCounter function which passes from HOME PAGE
  const [question, setQuestion] = useState(undefined);

  const getTypeTwoQuestion = async () => {
    const { data } = await axios.get("/typetwo");
    setQuestion(data);
  };
  useEffect(() => {
    console.log("did mount");
    getTypeTwoQuestion();
  }, []);
  const correctWrapper = () => {
    correct();
    updateCounter();
    setQuestionType(2);
  };

  const inCorrectWrapper = () => {
    inCorrect();
    updateCounterIncorrect();
    setQuestionType(2);
  };
  if (question) {
    let buttonArray = [];
    for (let country of question.countries) {
      if (country.country === question.askOn) {
        buttonArray.push(
          <button key={getNewKey()} onClick={() => correctWrapper()}>
            {country[question.column]}
          </button>
        );
      } else {
        buttonArray.push(
          <button key={getNewKey()} onClick={() => inCorrectWrapper()}>
            {country[question.column]}
          </button>
        );
      }
    }

    return (
      <div className="TypeOne">
        <h1>
          {question.template} {question.askOn}
        </h1>
        {buttonArray}
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
