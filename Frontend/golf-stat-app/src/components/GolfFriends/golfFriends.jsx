import "./golfFriend.css";

const GolfFriends = (props) => {
  return (
    <div>
      <div>
        {props.player.friends.map((friend) => {
          return (
            <div className="container-friend">
              <div>
                <h4>{friend.name}</h4>
              </div>
              <div>
                <p>{friend.handicap}</p>
              </div>
              <div>
                <h4>Rounds:</h4>
                {friend.rounds.map((round) => {
                  return (
                    <div className="container-round">
                      <div>
                        <p>{round.courseName}</p>
                        <p>{round.roundTotal}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GolfFriends;
