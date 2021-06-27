import React, { useState } from "react";
import axios from "axios";
import "./login.css";
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
        alert(error.response);
      });
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-7">
          <div className="login-title">
            <div>
              <h1>Please Login to your account</h1>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
      {/* start of second row */}
      <div class="row">
        <div class="col"></div>
        <div class="col-7">
          <div className="login-form-body">
            <form action="submit" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="" className="col-sm-2 col-form-label">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id=""
                    placeholder="example@gmail.com"
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Password: </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id=""
                    placeholder="enter password"
                    onChange={handlePasswordChange}
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
  );
};

export default Login;
