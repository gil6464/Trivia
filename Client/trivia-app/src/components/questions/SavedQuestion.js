import axios from "axios";
import React, { useState, useEffect } from "react";

function SavedQuestion({
  updateCounter,
  updateCounterIncorrect,
  setQuestionType,
}) {
  const [question, setQuestion] = useState(undefined);
  const [rated, setRated] = useState(false);

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

    let buttons;
    if (!rated) {
      buttons = getButtonList(question.id, setRated);
    } else {
      buttons = <h1>Thank you for rating</h1>;
    }

    return (
      <div className="SavedQuestion">
        <h1>{question.question}</h1>
        {buttonArray}
        <div className="rating">{buttons}</div>
      </div>
    );
  } else {
    return (
      <div className="SavedQuestion">
        <h1>Question is loading...</h1>
      </div>
    );
  }
}
//getting list of buttons
const getButtonList = (id, setRated) => {
  let buttonList = [];
  buttonList.push(
    <button key={getNewKey()} onClick={() => rateQuestion(1, id, setRated)}>
      1
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(2, id, setRated)}>
      2
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(3, id, setRated)}>
      3
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(4, id, setRated)}>
      4
    </button>,
    <button key={getNewKey()} onClick={() => rateQuestion(5, id, setRated)}>
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

const rateQuestion = async (rate, id, setRated) => {
  const { data } = await axios.patch("/savedquestion", { id: id, rate: rate });
  setRated(true);
};

export default SavedQuestion;
