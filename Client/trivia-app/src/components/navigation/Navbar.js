import Login from "../login/Login";
import Leaderboard from "../leaderboard/Leaderboard";
import Home from "../home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div id="navbar">
			<Router>
				<nav>
					<ul className="navbarlist">
						<li className="navbarli">
							<Link to="/">Home</Link>
						</li>
						<li className="navbarli">
							<Link to="/login">Login</Link>
						</li>
						<li className="navbarli">
							<Link to="/leaderboard">Leaderboard</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/leaderboard">
						<Leaderboard />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Navbar;
