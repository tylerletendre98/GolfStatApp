import "./golfFriend.css";

const GolfFriends = (props) => {
  console.log(props.friends.length);
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
          <button>Find Friends</button>
        </div>
      </div>
    );
  }
};

export default GolfFriends;
