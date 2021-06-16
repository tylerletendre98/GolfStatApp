import PlayerInfo from "../PlayerInfo/playerInfo";
import RoundData from "../roundData/roundData";
import GolfBag from "../golfbag/GolfBag";
import "./playerPage.css";

const PlayerPage = (props) => {
  return (
    <div className="container-player-info">
      <PlayerInfo player={props.player} />
      <RoundData player={props.player} />
      <GolfBag player={props.player} />
    </div>
  );
};

export default PlayerPage;