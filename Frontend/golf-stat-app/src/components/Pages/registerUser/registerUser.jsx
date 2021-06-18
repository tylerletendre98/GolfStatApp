import React, { useState } from "react";

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
    <div>
      <div>Please enter information in the following fields</div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="John Appleseed"
          onChange={handleNameChange}
        />
        <hr />
        <label htmlFor="">Email:</label>
        <input type="email" name="" id="" onChange={handleEmailChange} />
        <hr />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" onChange={handlePasswordChange} />
        <hr />
        <label htmlFor="">Do you belong to a club?</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="yes or no"
          onChange={handleBelongsToClubChange}
        />
        <hr />
        <label htmlFor="">Dexterity:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Right or Left handed"
          onChange={handleDexterityChange}
        />
        <hr />
        <label htmlFor="">Handicap:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your handicap"
          onChange={handleHandicapChange}
        />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default RegisterPage;
