import TypeOne from "../questions/TypeOne";
import TypeTwo from "../questions/TypeTwo";
import SavedQuestion from "../questions/SavedQuestion";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [questionType, setQuestionType] = useState(0);
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const updateCounter = () => {
    setCount(count + 1);
  };

  const updateCounterIncorrect = () => {
    setIncorrectCount(incorrectCount + 1);
  };

  useEffect(() => {
    // setQuestion(questionArray);
  }, []);

  let currentQuestion;
  if (questionType == 0) {
    currentQuestion = (
      <TypeOne
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
      />
    );
  }

  if (questionType == 1) {
    currentQuestion = (
      <TypeTwo
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
      />
    );
  }

  if (questionType == 2) {
    currentQuestion = (
      <SavedQuestion
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
      />
    );
  }

  return (
    <div id="Login">
      <h1 id="Login-Header">Home page</h1>
      <h1>Correct answers: {count}</h1>
      <h1>Incorrect answers: {incorrectCount}</h1>
      <h1>question number: {incorrectCount + count}</h1>
      {currentQuestion}
    </div>
  );
}

const constructQuestions = () => {};

const getTypeTwoQuestion = () => {
  axios.get("/typetwo").then((response) => {
    return response.data;
  });
};

const getSavedQuestion = () => {
  axios.get("/savedquestion").then((response) => {
    return response.data;
  });
};
export default Home;
