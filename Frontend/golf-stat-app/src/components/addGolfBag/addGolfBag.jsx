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
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <div>
            <div>
              <div className="form-title">
                <h3>Enter in your golf bag:</h3>
              </div>
              <div className="form-body">
                <div className="col">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <label htmlFor="" class="col-sm-2 col-form-label">
                        Driver:{" "}
                      </label>
                      <div className="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          name=""
                          id=""
                          placeholder="Club model and brand"
                          onChange={handleDriver}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="" class="col-sm-2 col-form-label">
                        3 wood:{" "}
                      </label>
                      <div className="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          name=""
                          id=""
                          placeholder="Club model and brand"
                          onChange={handleThreeWood}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="" class="col-sm-2 col-form-label">
                        3 hybrid:{" "}
                      </label>
                      <div className="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          name=""
                          id=""
                          placeholder="Club model and brand"
                          onChange={handleThreeHybrid}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="" class="col-sm-2 col-form-label">
                        Ironset:{" "}
                      </label>
                      <div className="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          name=""
                          id=""
                          placeholder="Club model and brand"
                          onChange={handleIronSet}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="" class="col-sm-2 col-form-label">
                        Enter Wedges:
                      </label>
                      <div className="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          name=""
                          id=""
                          placeholder="Club model and brand"
                          onChange={handleWedges}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="" class="col-sm-2 col-form-label">
                        Enter Putter:
                      </label>
                      <div className="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          name=""
                          id=""
                          placeholder="Club model and brand"
                          onChange={handlePutter}
                        />
                      </div>
                    </div>
                    <input type="submit" name="" id="" onClick={handleSubmit} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};
export default AddGolfBag;
