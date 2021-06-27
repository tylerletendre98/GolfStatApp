import PlayerInfo from "../PlayerInfo/playerInfo";
import RoundData from "../roundData/roundData";
import GolfBag from "../golfbag/GolfBag";
import "./playerPage.css";

const PlayerPage = (props) => {
  if (!props.player) {
    return <div>nothing loaded</div>;
  } else
    return (
      <div class="container">
        <div className="row">
          <div className="profile-title">
            <h2>{props.player.name}'s Profile</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div className="player-info-body">
              <PlayerInfo player={props.player} />
            </div>
          </div>
          <div class="col">
            <div>
              <RoundData
                player={props.player}
                deleteRound={props.deleteRound}
              />
            </div>
          </div>
          <div class="col">
            <div>
              <GolfBag golfBag={props.player.golfBag} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default PlayerPage;
