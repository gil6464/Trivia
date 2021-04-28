import React, { useRef } from "react";
import axios from "axios";

export default function Signup(props) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isSigned, setSigned] = useState(false);
  const signup = () => {
    axios
      .post("/user/register", {
        name: name,
        password: password,
      })
      .then((result) => {
        setSigned(true);
        ///////////
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Register</h1>
      <form action="/">
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
        <button type="submit " onClick={() => singup()}>
          Singup
        </button>
      </form>
      {isLogged && <Redirect to="/" />}
    </div>
  );
  {
    /* <header><h1>Sign up</h1></header>
    <input type="text" ref={userName}>
      <input type="password" ref={password}></input>
      <button
          type="submit"
          onClick={e => {
            if (!userName.current.value) {
              return;
            }
            if (!password.current.value) {
              return;
            }
          }}
        >
          Play
        </button>
  </div>) */
  }
}
