import React, { useState } from "react";
import "./registerUser.css";

const RegisterPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [belongsToClub, setBelongsToClub] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [handicap, setHandicap] = useState("");

  //sets name variable
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  //set email variable
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //sets password variable
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //sets belongs to club variable
  const handleBelongsToClubChange = (e) => {
    if (belongsToClub === "yes") {
      setBelongsToClub(true);
    } else {
      setBelongsToClub(false);
    }
  };
  //sets dexerity variable
  const handleDexterityChange = (e) => {
    setDexterity(e.target.value);
  };
  //sets handicap variable
  const handleHandicapChange = (e) => {
    setHandicap(e.target.value);
    parseFloat(handicap);
  };
  //register the new golfer
  const handleSubmit = (event) => {
    event.preventDefault();
    const newGolfer = {
      name: name,
      email: email,
      password: password,
      belongsToClub: belongsToClub,
      dexterity: dexterity,
      handicap: handicap,
    };
    props.registerNewGolfer(newGolfer);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <div>
            <h3>Please enter your information into the fields </h3>
          </div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <div className="registration-form">
            <form action="submit" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="John Appleseed"
                    onChange={handleNameChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="J.Appleseed@gmail.com"
                    onChange={handleEmailChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Enter password"
                    onChange={handlePasswordChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Belong to Club:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="yes or no"
                    onChange={handleBelongsToClubChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Dexterity:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Right or Left handed"
                    onChange={handleDexterityChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Handicap:
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Enter Handicap"
                    onChange={handleHandicapChange}
                    className="form-control"
                  />
                </div>
              </div>
              <input type="submit" name="" id="" />
            </form>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    // <div>
    //   <div>Please enter information in the following fields</div>

    // </div>
  );
};

export default RegisterPage;
