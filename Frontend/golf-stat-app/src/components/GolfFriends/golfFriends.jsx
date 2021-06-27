import { Link } from "react-router-dom";
import "./golfFriend.css";

const GolfFriends = (props) => {
  if (props.friends.length !== 0) {
    return (
      <div>
        {props.friends.map((friend) => {
          return (
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
                            <div>
                              <h5>Round</h5>
                              <div className="round">
                                <div>Course Name:{round.courseName}</div>
                                <div>Round Total:{round.roundTotal}</div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <Link to="/viewOtherGolfers">
            <button>Find More Friends</button>
          </Link>
        </div>
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
