import { Redirect } from "react-router";
import { useRef, useState } from "react";

// add route for sign up,

function Login({ setPlayer }) {
  const UserName = useRef("Your name");
  const [isLogged, setLogged] = useState(false);
  return (
    <div id="Login">
      <h1 id="Login-Header">Login page</h1>
      <h3>Enter your username to login</h3>
      <form action="/">
        <input type="text" placeholder="Username" ref={UserName} required />
        <button
          type="submit"
          onClick={e => {
            if (!UserName.current.value) {
              return;
            }
            setPlayer({
              name: UserName.current.value,
              score: 0,
              correct: 0,
              mistakes: 0,
            });
            setLogged(true);
          }}
        >
          Play
        </button>
      </form>
      {isLogged && <Redirect to="/Game" />}
    </div>
  );
}

export default Login;
