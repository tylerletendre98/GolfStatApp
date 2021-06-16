import "./roundData.css";

const RoundData = (props) => {
  if (props.player === null) {
    return <div>Loading...</div>;
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
                <div className="round-data">
                  <div>
                    <p>Course Name: {round.courseName}</p>
                  </div>
                  <div>
                    <p>Course Par: {round.coursePar}</p>
                  </div>
                  <div>
                    <p>Round Score: {round.roundTotal}</p>
                  </div>
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
