import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function loginClicked() {
    let loggedin = await login(userName, password);
    if (loggedin) {
      navigate("/");
    }
  }

  return (
    <>
      <h1>{"LOGIN"}</h1>
      <div>
        <div>
          {" "}
          <Link to="/">{"Back"}</Link>
        </div>
        <div class="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            value={userName}
            onChange={function (onChangeEvent) {
              setUserName(onChangeEvent.target.value);
            }}
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            value={password}
            onChange={function (onChangeEvent) {
              setPassword(onChangeEvent.target.value);
            }}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button onClick={loginClicked} type="submit">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
