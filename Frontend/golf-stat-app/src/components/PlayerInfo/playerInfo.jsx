import "./playerInfo.css";

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
          </div>
        </div>
      </div>
    );
  }
};

export default playerInfo;
