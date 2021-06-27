import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //sets email variable
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //sets password variable
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //Logs the user in
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log("hit submit");
    axios
      .post(`http://localhost:5000/api/auth/loginGolfer`, data)
      .then((response) => {
        localStorage.setItem("token", response.data);
        alert("You have successfully logged in!");
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };

  return (
    <div>
      <div className="login-title">
        <div>
          <h1>Please Login to your account</h1>
        </div>
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="example@gmail.com"
          onChange={handleEmailChange}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          id=""
          placeholder="enter password"
          onChange={handlePasswordChange}
        />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default Login;
