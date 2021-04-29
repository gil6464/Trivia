import Navbar from "./components/navigation/Navbar";
import React from "react";
import "./App.css";
import Cookies from "js-cookie";
import axios from "axios";

axios.interceptors.request.use(async function (config) {
  const token = Cookies.get("token");

  config.headers.Authorization = "bearer " + token;
  return config;
});

axios.interceptors.response.use({}, async function (error) {
  const refreshToken = Cookies.get("refreshToken");
  const errorRequest = error.response;
  if (errorRequest.status === 403) {
    const { accessToken } = await getNewToken(refreshToken);
    Cookies.set("token", accessToken);
  }
});
async function getNewToken(refToken) {
  try {
    const token = await axios.post("/user/token", {
      refToken: refToken,
    });
    return token.data;
  } catch (error) {
    console.log(error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
