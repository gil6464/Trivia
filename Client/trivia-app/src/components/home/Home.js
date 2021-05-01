import TypeOne from "../questions/TypeOne";
import TypeTwo from "../questions/TypeTwo";
import SavedQuestion from "../questions/SavedQuestion";
import React, { useState } from "react";
import GameOver from "../gameOver/GameOver";

function Home({ player, setPlayer }) {
  const [questionType, setQuestionType] = useState(0);
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
        <h3>Your Score is: {player.score}</h3>
        <h3>Correct answers: {player.correct}</h3>
        <h3>Incorrect answers: {player.mistakes}</h3>
        <h2>question number: {player.correct + player.mistakes + 1}</h2>
        {currentQuestion}
      </div>
    );
  } else return <GameOver currentPlayer={player} setPlayer={setPlayer} />;
}

export default Home;
