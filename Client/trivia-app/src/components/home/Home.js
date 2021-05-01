import TypeOne from "../questions/TypeOne";
import TypeTwo from "../questions/TypeTwo";
import SavedQuestion from "../questions/SavedQuestion";
import React, { useState, useEffect, useRef } from "react";
import GameOver from "../gameOver/GameOver";

function Home({ player, setPlayer }) {
  const [questionType, setQuestionType] = useState(0);
  const [count, setCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [timer, setTimer] = useState(20);

  useInterval(() => {
    if (timer > 0) setTimer(timer - 1);
    else {
      updateCounterIncorrect();
      if (questionType != 2) {
        setQuestionType(questionType + 1);
      } else {
        setQuestionType(0);
      }
    }
  }, 1000);

  const updateCounter = () => {
    setPlayer({
      name: player.name,
      score:
        player.score +
        ((1 - (20 - count * 0.5 - timer) / (20 - count * 0.5)) * 70 + 30),
      correct: player.correct + 1,
      mistakes: player.mistakes,
    });
    setCount(count + 1);
    setTimer(20 - count * 0.5);
  };

  const updateCounterIncorrect = () => {
    setCount(count + 1);
    setIncorrectCount(incorrectCount + 1);
    setPlayer({
      name: player.name,
      score: player.score,
      correct: player.correct,
      mistakes: player.mistakes + 1,
    });
    setTimer(20 - count * 0.5);
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
        {timer}
        {currentQuestion}
      </div>
    );
  } else
    return (
      <GameOver
        currentPlayer={player}
        setPlayer={setPlayer}
        setTimer={setTimer}
        setCount={setCount}
      />
    );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Home;
