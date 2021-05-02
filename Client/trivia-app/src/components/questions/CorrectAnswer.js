import React from "react";

export default function CorrectAnswer({
  correctAnswer,
  nextQuestion,
  setTimer,
}) {
  let answer;

  if (correctAnswer) {
    answer = <h1>The correct answer is {correctAnswer}</h1>;
  } else {
    answer = <h1>The answer was correct!</h1>;
  }

  return (
    <div>
      <button
        onClick={() => {
          nextQuestion();
        }}
      >
        Continue
      </button>
      {answer}
    </div>
  );
}
