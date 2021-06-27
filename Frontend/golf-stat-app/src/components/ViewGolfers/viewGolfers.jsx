import axios from "axios";
import { useEffect, useState } from "react";
import "./viewGolfer.css";

const ViewGolfers = (props) => {
  const [golfers, setGolfers] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/golfer/${props.playerId}/findgolfers`)
      .then((res) => setGolfers(res.data));
  }, [golfers]);

  const handleClick = (friendId) => {
    props.addFriendToGolfer(friendId);
    alert(`Successfully added Friend to friends list`);
  };
  if (golfers === undefined) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div>
      <div>
        {golfers.map((golfer) => {
          return (
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col-7">
                  <div>
                    <div className="golfer">
                      <div>
                        <h4>{golfer.name}</h4>
                      </div>
                      <div>
                        <p>Handicap: {golfer.handicap}</p>
                      </div>
                      <div>
                        <p>Dexterity: {golfer.dexterity}</p>
                      </div>
                      <div className="button-background">
                        <button onClick={() => handleClick(golfer._id)}>
                          Add this golfer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewGolfers;
