import "./golfBag.css";
import { Link } from "react-router-dom";

const GolfBag = (props) => {
  console.log(props.player.golfBag);
  if (props.player.golfBag.length !== 0) {
    return (
      <div>
        <div>
          <h3>Golfbag:</h3>
        </div>
        {props.player.golfBag.map((club) => {
          return (
            <div className="golfbag">
              <div>
                <p>Driver: {club.driver}</p>
              </div>
              <div>
                <p>Three Wood: {club.threeWood}</p>
              </div>
              <div>
                <p>Three Hybrid: {club.threeHybrid}</p>
              </div>
              <div>
                <p>Iron Set:{club.ironSet}</p>
              </div>
              <div>
                <p>Wedges:{club.wedges}</p>
              </div>
              <div>
                <p>Putter: {club.putter}</p>
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
          <h3>Golfbag: </h3>
        </div>
        <div>
          <p>This player has not entered a golf bag</p>
        </div>
        <Link to="/addGolfBag">
          <button>Add golfBag</button>
        </Link>
      </div>
    );
  }
};

export default GolfBag;
