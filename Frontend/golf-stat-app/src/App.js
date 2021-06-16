import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Pages/Home/Home";
import PlayerPage from "./components/Pages/PlayerPage";
import ScoreCard from "./components/Pages/ScoreCard";
import Login from "./components/Pages/Login";
import axios from "axios";
import React, { useState, useEffect } from "react";
import jwt from "jwt-decode";

function App() {
  const [player, setPlayer] = useState();
  const playerId = "60c50f834259cc0555f7b7b9";

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/golfer/golfer/${playerId}`)
      .then((response) => {
        setPlayer(response.data);
      });
    console.log(player);
  }, []);

  // const loginUser = (email, password) => {
  //   axios
  //     .post(`http://localhost:5000/api/auth/loginGolfer`, {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       localStorage.setItem("token", res.data.token);
  //     });
  // };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/player"
          render={(props) => <PlayerPage {...props} player={player} />}
        />
        <Route path="/scorecard" component={ScoreCard} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
