import React, { useState } from "react";
import { Redirect } from "react-router";
import QA from "./Q&A.gif";
import search from "./search.gif";
import what from "./what.gif";
import stuck from "./stuck.gif";
import "./First.css";

function First(props) {
  const [toLogin, setToLogin] = useState(false);
  const [toSignUp, setToSignUp] = useState(false);

  const image = (
    <img src={QA} alt="question-logo" className="question-button" />
  );
  const image1 = (
    <img src={search} alt="question-logo" className="question-button" />
  );
  const image2 = (
    <img src={what} alt="question-logo" className="question-button" />
  );

  const tableRow1 = (
    <tr id="table1">
      <td>{image}</td>
      <td>{image1}</td>
      <td>{image2}</td>
    </tr>
  );

  const tableRow2 = (
    <tr id="table2">
      <td>{image1}</td>
      <td>{image2}</td>
      <td>{image}</td>
    </tr>
  );

  const tableRow3 = (
    <tr id="table3">
      <td>{image2}</td>
      <td>{image}</td>
      <td>{image1}</td>
    </tr>
  );

  return (
    <div className="loginAndSignup">
      {toLogin && <Redirect to="/login"></Redirect>}
      {toSignUp && <Redirect to="/signup"></Redirect>}
      <h1 id="welcome-header">trivia name </h1>

      <div className="container">
        <section id="table-container">
          {tableRow1}
          {tableRow3}
        </section>
        <h2 id="second-header">Who will be the champion?</h2>
        <section id="buttons-container">
          <button
            onClick={() => {
              setToLogin(true);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setToSignUp(true);
            }}
          >
            SignUp
          </button>
        </section>
      </div>
    </div>
  );
}

export default First;
