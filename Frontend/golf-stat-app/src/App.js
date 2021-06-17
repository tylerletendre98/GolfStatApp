import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Pages/Home/Home";
import PlayerPage from "./components/Pages/PlayerPage";
import ScoreCard from "./components/Pages/ScoreCard";
import Login from "./components/Pages/Login";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

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
        <Route path="/login" render={(props) => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
