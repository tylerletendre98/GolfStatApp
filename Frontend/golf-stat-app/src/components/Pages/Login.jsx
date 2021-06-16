import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {};
  return (
    <div>
      <div className="login-title">
        <div>
          <h1>Please Login to your account</h1>
        </div>
      </div>
      <form action="submit">
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="example@gmail.com"
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          id=""
          placeholder="enter password"
        />
      </form>
    </div>
  );
};

export default Login;
