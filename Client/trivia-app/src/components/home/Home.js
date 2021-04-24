import TypeOne from "../questions/TypeOne";
import TypeTwo from "../questions/TypeTwo";
import SavedQuestion from "../questions/SavedQuestion";
import React, { useState, useEffect } from "react";

let questionArray = [
  <button onClick={() => (questionArray[0] = undefined)}>1</button>,
  <button onClick={() => (questionArray[1] = undefined)}>2</button>,
  <button onClick={() => (questionArray[2] = undefined)}>3</button>,
  <button onClick={() => (questionArray[3] = undefined)}>4</button>,
  <button onClick={() => (questionArray[4] = undefined)}>5</button>,
];

function Home() {
  const [question, setQuestion] = useState(0);
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
  if (question == 0) {
    currentQuestion = <TypeOne updateCounter={updateCounter} updateCounterIncorrect={updateCounterIncorrect} setQuestion={setQuestion} />;
  }

  if (question == 1) {
    currentQuestion = <TypeTwo updateCounter={updateCounter} updateCounterIncorrect={updateCounterIncorrect} setQuestion={setQuestion} />;
  }

  if (question == 2) {
    currentQuestion = <SavedQuestion updateCounter={updateCounter} updateCounterIncorrect={updateCounterIncorrect} setQuestion={setQuestion} />;
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

const getTypeOneQuestion = () => {};

const getTypeTwoQuestion = () => {};

const getSavedQuestion = () => {};
export default Home;
