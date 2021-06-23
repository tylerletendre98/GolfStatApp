import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Pages/Home/Home";
import PlayerPage from "./components/Pages/PlayerPage";
import ScoreCard from "./components/Pages/Scorcard/ScoreCard";
import Login from "./components/Pages/Login";
import RegisterPage from "./components/Pages/registerUser/registerUser";
import GolferData from "./components/Golferdata/golferData";
import AddGolfBag from "./components/addGolfBag/addGolfBag";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

function App() {
  const [player, setPlayer] = useState();
  const [round, setRound] = useState();
  const [jwt, setJwt] = useState(localStorage.getItem("token"));
  const [newGolfBag, setNewGolfBag] = useState();
  const [pastRounds, setPastRounds] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    let playerId;
    if (jwt) {
      playerId = jwtDecode(jwt);
    }
    try {
      axios
        .get(`http://localhost:5000/api/golfer/golfer/${playerId._id}`, {
          headers: { Authorization: "Bearer " + jwt },
        })
        .then((res) => {
          setPlayer(res.data);
        });
      getPastRounds(player);
    } catch (err) {
      console.log(err);
    }
  }, [jwt]);

  const getPastRounds = (player) => {
    let rounds = [];
    for (let index = 0; index < player.rounds.length; index++) {
      let round = player.rounds[index].roundTotal;
      rounds.push(round);
    }
    setPastRounds(rounds);
    console.log(pastRounds);
  };

  const addNewGolfBag = (newGolfBag) => {
    axios
      .post(
        `http://localhost:5000/api/golfBag/addGolfBag/${player._id}`,
        newGolfBag
      )
      .then((res) => setPlayer(res.data));
  };

  const addRoundToGolfer = (round) => {
    axios
      .post(`http://localhost:5000/api/round/addRound/${player._id}`, round)
      .then((res) => setPlayer(res.data));
  };

  const registerNewGofler = (newGolfer) => {
    axios
      .post(`http://localhost:5000/api/golfer`, newGolfer)
      .then((response) => {
        localStorage.setItem("token", response.data);
        alert(`Thankyou for signing up for Golf Stat App`);
        window.location = "/player";
      });
  };

  const deleteRound = (roundId) => {
    axios
      .delete(
        `http://localhost:5000/api/round/deleteRound/${player._id}/${roundId}`
      )
      .then((res) => setPlayer(res.data));
  };
  return (
    <div className="App">
      <NavBar player={player} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/player"
          render={(props) => (
            <PlayerPage {...props} player={player} deleteRound={deleteRound} />
          )}
        />
        <Route
          path="/scorecard"
          render={(props) => (
            <ScoreCard
              {...props}
              addARoundToGolfer={addRoundToGolfer}
              round={round}
              player={player}
            />
          )}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route
          path="/register"
          render={(props) => (
            <RegisterPage {...props} registerNewGolfer={registerNewGofler} />
          )}
        />
        <Route
          path="/addGolfBag"
          render={(props) => (
            <AddGolfBag {...props} addNewGolfBag={addNewGolfBag} />
          )}
        />
        <Route
          path="/golferData"
          render={(props) => <GolferData {...props} pastRounds={pastRounds} />}
        />
      </Switch>
    </div>
  );
}

export default App;
