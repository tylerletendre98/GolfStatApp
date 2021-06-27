import "./editGolfBag.css";
import { useState } from "react";

const EditGolfBag = (props) => {
  const [driver, setDriver] = useState(props.golfBag.driver);
  const [threeWood, setThreeWood] = useState(props.golfBag.threeWood);
  const [threeHybrid, setThreeHybrid] = useState(props.golfBag.threeHybrid);
  const [ironSet, setIronSet] = useState(props.golfBag.ironSet);
  const [wedges, setWedges] = useState(props.golfBag.wedges);
  const [putter, setPutter] = useState(props.golfBag.putter);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGolfBag = {
      driver: driver,
      threeWood: threeWood,
      threeHybrid: threeHybrid,
      ironSet: ironSet,
      wedges: wedges,
      putter: putter,
    };
    props.editGolfBag(newGolfBag);
    window.location = "/player";
  };

  const handleDriver = (e) => {
    setDriver(e.target.value);
  };
  const handleThreeWood = (e) => {
    setThreeWood(e.target.value);
  };
  const handleThreeHybrid = (e) => {
    setThreeHybrid(e.target.value);
  };
  const handleIronSet = (e) => {
    setIronSet(e.target.value);
  };
  const handleWedges = (e) => {
    setWedges(e.target.value);
  };
  const handlePutter = (e) => {
    setPutter(e.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <h3>Edit Golf Bag</h3>
        </div>
        <div className="golfBag-form">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Driver:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={props.golfBag.driver}
              onChange={handleDriver}
            />
            <hr />
            <label htmlFor="">Three Wood:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={props.golfBag.threeWood}
              onChange={handleThreeWood}
            />
            <hr />
            <label htmlFor="">Three Hybrid:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={props.golfBag.threeHybrid}
              onChange={handleThreeHybrid}
            />
            <hr />
            <label htmlFor="">Ironset:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={props.golfBag.ironSet}
              onChange={handleIronSet}
            />
            <hr />
            <label htmlFor="">Wedges:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={props.golfBag.wedges}
              onChange={handleWedges}
            />
            <hr />
            <label htmlFor="">Putter:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={props.golfBag.putter}
              onChange={handlePutter}
            />
            <br />
            <input type="submit" name="" id="" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditGolfBag;
