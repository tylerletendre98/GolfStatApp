import { Link } from "react-router-dom";
import "./golfFriend.css";

const GolfFriends = (props) => {
  const handleClick = (friendId) => {
    props.deleteFriend(props.player._id, friendId);
  };

  if (props.friends.length !== 0) {
    return (
      <div>
        <div>
          <Link to="/viewOtherGolfers">
            <button>Find More Friends</button>
          </Link>
        </div>
        {props.friends.map((friend) => {
          return (
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col-6">
                  <div className="friend-container">
                    <div className="friend">
                      <div className="friend-info">
                        <div>
                          <h4>{friend.name}</h4>
                        </div>
                        <div>
                          <p> Handicap: {friend.handicap}</p>
                        </div>
                        <div className="friend-round">
                          {friend.rounds.map((round) => {
                            if (round.length === 0) {
                              return (
                                <div>
                                  <p>This golfer has no rounds</p>
                                </div>
                              );
                            } else {
                              return (
                                <div>
                                  <div className="friend-round-container">
                                    <h5>Round</h5>
                                    <div className="round">
                                      <div>
                                        <p>Course Name:{round.courseName}</p>
                                      </div>
                                      <div>
                                        <p>Round Total:{round.roundTotal}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => handleClick(friend._id)}>
                        Delete Friend
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <p>this golfer has no friends</p>
        </div>
        <div>
          <Link to="/viewOtherGolfers">
            <button>Find Friends</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default GolfFriends;
