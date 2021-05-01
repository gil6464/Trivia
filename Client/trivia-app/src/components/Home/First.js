import React, { useState } from "react";
import { Redirect } from "react-router";
import logo from "./logo.png";
import "./First.css";

function First(props) {
  const [toLogin, setToLogin] = useState(false);
  const [toSignUp, setToSignUp] = useState(false);

  const image = <img src={logo} alt="question-logo" id="question-button" />;
  const tableRow = (
    <tr>
      <td>{image}</td>
      <td>{image}</td>
      <td>{image}</td>
      <td>{image}</td>
    </tr>
  );

  return (
    <div className="loginAndSignup">
      {toLogin && <Redirect to="/login"></Redirect>}
      {toSignUp && <Redirect to="/signup"></Redirect>}
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
    </div>
  );
}

export default First;
