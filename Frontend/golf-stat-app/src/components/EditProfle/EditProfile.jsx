import { useState } from "react";
import "./editGolfer.css";

const EditProfile = (props) => {
  const [name, setName] = useState(props.player.name);
  const [email, setEmail] = useState(props.player.email);
  const [handicap, setHandicap] = useState(props.player.handicap);
  const [dexterity, setDexterity] = useState(props.player.dexterity);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleHandicapChange = (e) => {
    setHandicap(e.target.value);
  };
  const handleDexterityChange = (e) => {
    setDexterity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newProfile = {
      name: name,
      email: name,
      handicap: handicap,
      dexterity: dexterity,
    };
    props.editProfile(newProfile);
    window.location = "/player";
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <div>
            <h3>Edit Profile</h3>
          </div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col-7">
          <div className="golfer-form">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name=""
                id=""
                placeholder={props.player.name}
                onChange={handleNameChange}
              />
              <hr />
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name=""
                id=""
                placeholder={props.player.email}
                onChange={handleEmailChange}
              />
              <hr />
              <label htmlFor="">Handicap:</label>
              <input
                type="number"
                name=""
                id=""
                placeholder={props.player.handicap}
                onChange={handleHandicapChange}
              />
              <hr />
              <label htmlFor="">Dexterity</label>
              <input
                type="text"
                name=""
                id=""
                placeholder={props.player.dexterity}
                onChange={handleDexterityChange}
              />
              <hr />
              <input type="submit" name="" id="" />
            </form>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default EditProfile;
