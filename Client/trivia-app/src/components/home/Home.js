import TypeOne from "../questions/TypeOne";
import TypeTwo from "../questions/TypeTwo";
import SavedQuestion from "../questions/SavedQuestion";
import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const updateCounter = () => {
    setCount(count + 1);
  };

  const updateCounterIncorrect = () => {
    setIncorrectCount(incorrectCount + 1);
  };

  return (
    <div id="Login">
      <h1 id="Login-Header">Home page</h1>
      <h1>Correct answers: {count}</h1>
      <h1>Incorrect answers: {incorrectCount}</h1>
      <SavedQuestion
        updateCounter={updateCounter}
        updateCounterIncorrect={updateCounterIncorrect}
      />
    </div>
  );
}

export default Home;
