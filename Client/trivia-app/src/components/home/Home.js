import TypeOne from "../questions/TypeOne";
import TypeTwo from "../questions/TypeTwo";
import SavedQuestion from "../questions/SavedQuestion";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GameOver from "../gameOver/GameOver";

function Home({ player, setPlayer }) {
  const [questionType, setQuestionType] = useState(0);
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const updateCounter = () => {
    setCount(count + 1);
    setPlayer({
      name: player.name,
      score: player.score + 100,
      correct: player.correct + 1,
      mistakes: player.mistakes,
    });
    console.log(player);
  };

  const updateCounterIncorrect = () => {
    setIncorrectCount(incorrectCount + 1);
    setPlayer({
      name: player.name,
      score: player.score,
      correct: player.correct,
      mistakes: player.mistakes + 1,
    });
  };

  let currentQuestion;
  if (questionType === 0) {
    currentQuestion = (
      <TypeOne
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
      />
    );
  }

  if (questionType === 1) {
    currentQuestion = (
      <TypeTwo
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
      />
    );
  }

  if (questionType === 2) {
    currentQuestion = (
      <SavedQuestion
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
        setQuestionType={setQuestionType}
      />
    );
  }
  if (player.mistakes < 3) {
    return (
      <div id="Login">
        <h1>{player.name}</h1>
        <h2>Your Score is: {player.score}</h2>
        <h1>Correct answers: {player.correct}</h1>
        <h1>Incorrect answers: {player.mistakes}</h1>
        <h1>question number: {player.correct + player.mistakes}</h1>
        {currentQuestion}
      </div>
    );
  } else return <GameOver currentPlayer={player} />;
}

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
