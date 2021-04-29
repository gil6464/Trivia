import Login from "../login/Login";
import Signup from "../login/Signup";
import GameOver from "../gameOver/GameOver";
import Home from "../home/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import { eraseCookie, readCookie, createCookie } from "../../utils/cookies";
function Navbar() {
  const [player, setPlayer] = useState({});

  const [user, setUser] = useState(readCookie("token"));

  return (
    <div id="navbar">
      <Router>
        <nav>
          <ul className="navbarlist">
            <li className="navbarli">
              <Link to="/">Login</Link>
            </li>
            <li className="navbarli">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Login setPlayer={setPlayer} />
          </Route>
          <Route exact path="/leaderboard">
            <GameOver currentPlayer={undefined} />
          </Route>
          <Route exact path="/game">
            <Home player={player} setPlayer={setPlayer} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
