import axios from "axios";
import React, { useState, useEffect } from "react";
import CorrectAnswer from "./CorrectAnswer";
//TODO

function TypeOne({
  updateCounter,
  updateCounterIncorrect,
  setQuestionType,
  setCounter,
  stop,
}) {
  const [question, setQuestion] = useState(undefined);
  const [rated, setRated] = useState(false);
  const [next, showNext] = useState(false);

  const getTypeOneQuestion = async () => {
    const { data } = await axios.get("/typeone");
    setQuestion(data);
  };

  useEffect(() => {
    getTypeOneQuestion();
  }, []);
  //Added a wrapper to correct function since we need to use updateCounter function which passes from HOME PAGE
  const correctWrapper = () => {
    correct();
    updateCounter();
    showNext(true);
    stop();
  };

  const inCorrectWrapper = () => {
    inCorrect();
    updateCounterIncorrect();
    showNext(true);
    stop();
  };

  let buttons;
  if (!rated) {
    buttons = getButtonList(question, setRated);
  } else {
    buttons = <h1>Thank you for rating</h1>;
  }

  if (question) {
    let nextQuestion = <h1>Click above to answer</h1>;
    if (next) {
      nextQuestion = (
        <CorrectAnswer
          correctAnswer={question.correct}
          nextQuestion={() => {
            setQuestionType(1);
          }}
          setCounter={setCounter}
        />
      );
    }

    let buttonArray = [];
    if (!next) {
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
    }
    return (
      <div className="TypeOne">
        <h1>{question.template}</h1>
        {buttonArray}
        <div className="rating">{buttons}</div>
        {nextQuestion}
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

const correct = () => {};

const inCorrect = () => {};

const getNewKey = () => {
  return 1000000 + Math.floor(Math.random() * 9000000);
};

const rateQuestion = async (rate, question, setRated) => {
  await axios.post("/savedquestion", {
    question: question.template,
    column: question.column,
    correct: question.correct,
    rating: rate,
    ratingCounter: 1,
    option1: question.countries[0].country,
    option2: question.countries[1].country,
    option3: question.countries[2].country,
    option4: question.countries[3].country,
  });
  setRated(true);
};

const getButtonList = (question, setRated) => {
  let buttonList = [];
  buttonList.push(<h3 key={getNewKey()}>Rate this question!</h3>);
  buttonList.push(
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(1, question, setRated)}
    >
      1
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(2, question, setRated)}
    >
      2
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(3, question, setRated)}
    >
      3
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(4, question, setRated)}
    >
      4
    </button>,
    <button
      key={getNewKey()}
      onClick={() => rateQuestion(5, question, setRated)}
    >
      5
    </button>
  );
  return buttonList;
};

export default TypeOne;
