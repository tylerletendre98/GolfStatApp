import "./addGolfBag.css";
import React, { useState } from "react";

const AddGolfBag = (props) => {
  const [driver, setDriver] = useState("");
  const [threeWood, setThreeWood] = useState("");
  const [threeHybrid, setThreeHybrid] = useState("");
  const [ironSet, setIronSet] = useState("");
  const [wedges, setWedges] = useState("");
  const [putter, setPutter] = useState("");

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
    props.addNewGolfBag(newGolfBag);
    window.location = "/";
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
        <h3>Enter in your golf bag:</h3>
      </div>
      <div className="golfbag-form">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Driver:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Club model and brand"
            onChange={handleDriver}
          />
          <hr />
          <label htmlFor="">3 wood:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Club model and brand"
            onChange={handleThreeWood}
          />
          <hr />
          <label htmlFor="">3 hybrid:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Club model and brand"
            onChange={handleThreeHybrid}
          />
          <hr />
          <label htmlFor="">Enter Ironset:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Club model and brand"
            onChange={handleIronSet}
          />
          <hr />
          <label htmlFor="">Enter Wedges:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Club model and brand"
            onChange={handleWedges}
          />
          <hr />
          <label htmlFor="">Enter Putter:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Club model and brand"
            onChange={handlePutter}
          />
          <hr />
          <input type="submit" name="" id="" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};
export default AddGolfBag;
