import "./roundData.css";

const RoundData = (props) => {
  const handleClick = (roundId) => {
    props.deleteRound(roundId);
  };

  if (props.player.length === 0) {
    return <div>This player hasnt entered any rounds</div>;
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
