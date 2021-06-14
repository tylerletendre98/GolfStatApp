import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PlayerPage from "./components/PlayerPage";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/player" component={PlayerPage} />
        <Route path="/scorecard" component={ScoreCard} />
      </Switch>
    </div>
  );
}

export default App;
