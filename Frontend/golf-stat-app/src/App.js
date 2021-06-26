import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Pages/Home/Home";
import PlayerPage from "./components/Pages/PlayerPage";
import ScoreCard from "./components/Pages/Scorcard/ScoreCard";
import Login from "./components/Pages/Login";
import RegisterPage from "./components/Pages/registerUser/registerUser";
import GolferData from "./components/Golferdata/golferData";
import GolfFriends from "./components/GolfFriends/golfFriends";
import AddGolfBag from "./components/addGolfBag/addGolfBag";
import EditProfile from "./components/EditProfle/EditProfile";
import EditGolfBag from "./components/editGolfbag/editGolfBag";
import ExploreCourses from "./components/exploreCourses/exploreCourse";
import ViewGolfers from "./components/ViewGolfers/viewGolfers";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

function App() {
  const [player, setPlayer] = useState();
  const [round, setRound] = useState();
  const [jwt, setJwt] = useState(localStorage.getItem("token"));
  const [pastRounds, setPastRounds] = useState();

  useEffect(
    () => {
      const jwt = localStorage.getItem("token");
      let playerId;
      if (jwt) {
        playerId = jwtDecode(jwt);
        axios
          .get(`http://localhost:5000/api/golfer/golfer/${playerId._id}`, {
            headers: { Authorization: "Bearer " + jwt },
          })
          .then((res) => {
            setPlayer(res.data);
          });
      }
    },
    [jwt],
    [player]
  );

  // useEffect(() => {
  //   getPastRounds();
  // }, []);

  const getPastRounds = () => {
    let rounds = [];
    for (let index = 0; index < player.rounds.length; index++) {
      let round = player.rounds[index].roundTotal;
      rounds.push(round);
    }
    setPastRounds(rounds);
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
      .then((res) => {
        setPlayer(res.data);
      });
  };

  const editProfile = (newProfile) => {
    axios
      .put(
        `http://localhost:5000/api/golfer/updateGolfer/${player._id}`,
        newProfile
      )
      .then((res) => setPlayer(res.data));
  };

  const editGolfBag = (newGolfBag) => {
    console.log(newGolfBag);
    axios
      .put(
        `http://localhost:5000/api/golfBag/updateGolfBag/${player._id}/${player.golfBag._id}`,
        newGolfBag
      )
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

  const addFriendToGolfer = (friendId) => {
    axios
      .post(
        `http://localhost:5000/api/golfer/${player._id}/addFriend/${friendId}`
      )
      .then((res) => setPlayer(res.data));
  };
  const deleteRound = (playerId, roundId) => {
    axios
      .delete(
        `http://localhost:5000/api/round/deleteRound/${playerId}/${roundId}`
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
          render={(props) => (
            <GolferData
              {...props}
              pastRounds={pastRounds}
              getPastRounds={getPastRounds}
            />
          )}
        />
        <Route
          path="/golfFriends"
          render={(props) => (
            <GolfFriends {...props} friends={player.friends} />
          )}
        />
        <Route
          path="/editProfile"
          render={(props) => (
            <EditProfile {...props} player={player} editProfile={editProfile} />
          )}
        />
        <Route
          path="/editGolfbag"
          render={(props) => (
            <EditGolfBag
              {...props}
              golfBag={player.golfBag}
              editGolfBag={editGolfBag}
            />
          )}
        />
        <Route
          path="/viewOtherGolfers"
          render={(props) => (
            <ViewGolfers
              {...props}
              playerId={player._id}
              addFriendToGolfer={addFriendToGolfer}
            />
          )}
        />
        <Route
          path="/exploreCourses"
          render={(props) => <ExploreCourses {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
