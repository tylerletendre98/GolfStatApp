import "./golfBag.css";
import { Link } from "react-router-dom";

const GolfBag = (props) => {
  if (props.golfBag !== undefined) {
    return (
      <div>
        <div>
          <h3>Golfbag:</h3>
        </div>
        <div className="golfbag">
          <div>
            <p>Driver: {props.golfBag.driver}</p>
          </div>
          <div>
            <p>Three Wood: {props.golfBag.threeWood}</p>
          </div>
          <div>
            <p>Three Hybrid: {props.golfBag.threeHybrid}</p>
          </div>
          <div>
            <p>Iron Set:{props.golfBag.ironSet}</p>
          </div>
          <div>
            <p>Wedges:{props.golfBag.wedges}</p>
          </div>
          <div>
            <p>Putter: {props.golfBag.putter}</p>
          </div>
        </div>
        <div>
          <button>Edit Golf Bag</button>
        </div>
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
