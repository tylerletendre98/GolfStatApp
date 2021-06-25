import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./golfFriend.css";

const GolfFriends = (props) => {
  if (props.friends.length !== 0) {
    return (
      <div>
        {props.friends.map((friend) => {
          return (
            <div>
              <div>
                <p>{friend.name}</p>
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
