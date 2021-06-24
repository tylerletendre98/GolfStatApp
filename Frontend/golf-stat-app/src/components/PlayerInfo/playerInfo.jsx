import "./playerInfo.css";
import { Link } from "react-router-dom";

const playerInfo = (props) => {
  if (props.player === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <h3>Player Info</h3>
        </div>
        <div className="player-info">
          <div>
            <div>
              <p>Name: {props.player.name}</p>
            </div>
            <div>
              <p>Dexterity: {props.player.dexterity}</p>
            </div>
            <div>
              <p>Handicap: {props.player.handicap}</p>
            </div>
            <div>
              <p>Career amount of rounds: {props.player.rounds.length}</p>
            </div>
          </div>
        </div>
        <Link to="/editProfile">
          <button>Edit Profile</button>
        </Link>
      </div>
    );
  }
};

export default playerInfo;
