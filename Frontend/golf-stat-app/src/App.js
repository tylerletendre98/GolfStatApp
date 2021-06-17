import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Pages/Home/Home";
import PlayerPage from "./components/Pages/PlayerPage";
import ScoreCard from "./components/Pages/ScoreCard";
import Login from "./components/Pages/Login";
import RegisterPage from "./components/Pages/registerUser/registerUser";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

function App() {
  const [player, setPlayer] = useState();

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    try {
      const player = jwtDecode(jwt);
      setPlayer(player);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const registerNewGofler = (newGolfer) => {
    axios
      .post(`http://localhost:5000/api/golfer`, newGolfer)
      .then((response) => {
        localStorage.setItem("token", response.data);
        alert(`Thankyou for signing up for Golf Stat App`);
        window.location = "/player";
      });
  };

  return (
    <div className="App">
      <NavBar player={player} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/player"
          render={(props) => <PlayerPage {...props} player={player} />}
        />
        <Route path="/scorecard" component={ScoreCard} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route
          path="/register"
          render={(props) => (
            <RegisterPage {...props} registerNewGolfer={registerNewGofler} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
