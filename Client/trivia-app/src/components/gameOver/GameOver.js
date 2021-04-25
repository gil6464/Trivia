import axios from "axios";
import React, { useState, useEffect } from "react";

function GameOver({ currentPlayer }) {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [isPosted, setPosted] = useState(false);

  const getLeaderboard = async () => {
    const { data } = await axios.get("/user/leaderboard");
    setLeaderBoard(data);
  };
  useEffect(() => {
    getLeaderboard();
  }, []);

  const postUser = async user => {
    await axios.post("/user", { name: user.name, score: user.score });
    setPosted(true);
    getLeaderboard();
  };
  return (
    <div>
      {currentPlayer && (
        <div>
          <h1>
            {currentPlayer.name} You scored: {currentPlayer.score} points!
          </h1>
          <p>{currentPlayer.name}, You are the weakest link</p>
          {!isPosted && (
            <button
              onClick={() => {
                postUser(currentPlayer);
              }}
            >
              Post your Score!
            </button>
          )}
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Leaderboard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name</th>
            <th>score</th>
          </tr>
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
