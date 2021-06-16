import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
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
        console.log(response);
        localStorage.setItem("token", response.data);
        window.location = "/";
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
