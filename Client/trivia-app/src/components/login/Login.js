import { Redirect } from "react-router";
import { useState } from "react";
import axios from "axios";
import { eraseCookie, readCookie, createCookie } from "../../utils/cookies";
// add route for sign up,

function Login({ setPlayer }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setLogged] = useState(false);

  const login = async () => {
    const { data } = await axios.post("/user/login", {
      name,
      password,
    });
    console.log("!!!!!!!!!!!!!!!!!!!", data);
    await createCookie("token", data.accessToken, 1);
    await createCookie("refreshToken", data.refreshToken, 1);
    setPlayer({
      name,
      score: 0,
      correct: 0,
      mistakes: 0,
    });
    setLogged(true);
  };

  return (
    <div id="Login">
      {isLogged && <Redirect to="/game"></Redirect>}
      <h1 id="Login-Header">Login page</h1>
      <h3>Enter your username to login</h3>

      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
