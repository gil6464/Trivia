import axios from "axios";
import React, { useState, useEffect } from "react";

function TypeOne({ updateCounter, updateCounterIncorrect, setQuestionType }) {
  const [question, setQuestion] = useState(undefined);

  const getTypeOneQuestion = async () => {
    const { data } = await axios.get("/typeone");
    console.log(data);
    setQuestion(data);
  };

  useEffect(() => {
    console.log("did mount");
    getTypeOneQuestion();
  }, []);
  //Added a wrapper to correct function since we need to use updateCounter function which passes from HOME PAGE
  const correctWrapper = () => {
    correct();
    updateCounter();
    setQuestionType(1);
  };

  const inCorrectWrapper = () => {
    inCorrect();
    updateCounterIncorrect();
    setQuestionType(1);
  };

  if (question) {
    let buttonArray = [];
    for (let country of question.countries) {
      if (country.country === question.correct) {
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
        <h1>{question.template}</h1>
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

export default TypeOne;
