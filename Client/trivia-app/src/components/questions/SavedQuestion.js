import axios from "axios";
import React, { useState, useEffect } from "react";

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

    let buttons = getButtonList(question.id);

    return (
      <div className="TypeOne">
        <h1>{question.question}</h1>
        {buttonArray}
        <div className="rating">{buttons}</div>
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
//getting list of buttons
const getButtonList = (id) => {
  let buttonList = [];
  buttonList.push(
    <button key={getNewKey()} onClick={() => rateQuestion(1, id)}>
      1
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(2, id)}>
      2
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(3, id)}>
      3
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(4, id)}>
      4
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(5, id)}>
      5
    </button>
  );
  return buttonList;
};
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

const rateQuestion = async (rate, id) => {
  const { data } = await axios.patch("/savedquestion", { id: id, rate: rate });
};

export default SavedQuestion;
