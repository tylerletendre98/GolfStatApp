import "./roundData.css";
import { Link } from "react-router-dom";

const RoundData = (props) => {
  const handleClick = (roundId) => {
    props.deleteRound(props.player._id, roundId);
  };

  if (props.player.rounds.length === 0) {
    return (
      <div>
        <div>
          <h3>Rounds:</h3>
        </div>
        <div className="round-data">
          <div>
            <p>This player doesnt have any Rounds.</p>
          </div>
        </div>
        <div>
          <Link to="/scorecard">
            <button>Enter in a round!</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h3>Rounds:</h3>
        </div>
        <div>
          {props.player.rounds.map((round) => {
            return (
              <div>
                <div className="round-data" key={round._id}>
                  <div>
                    <p>Course Name: {round.courseName}</p>
                  </div>
                  <div>
                    <p>Course Par: {round.coursePar}</p>
                  </div>
                  <div>
                    <p>Round Score: {round.roundTotal}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleClick(round._id);
                    }}
                  >
                    Delete Round
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default RoundData;
