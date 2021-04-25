import axios from "axios";
import React, { useState } from "react";

function GameOver({ currentPlayer }) {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const getLeaderboard = async () => {
    const { data } = await axios.get("/user/leaderboard");
    setLeaderBoard(data);
  };
  getLeaderboard();
  return (
    <div>
      <h1>
        {currentPlayer.name} You scored: {currentPlayer.score} points!
      </h1>

      <table>
        <thead>
          <h1>Leaderboard</h1>
        </thead>
        <tbody>
          <th>Name</th>
          <th>score</th>
          {leaderBoard.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GameOver;
