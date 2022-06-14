import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGGED_IN, logout } from "../services/authService";
const Welcome = () => {
  const [loginState, setLoginState] = useState(LOGGED_IN);
  function logoutClick() {
    logout();
    setLoginState(false);
  }
  return (
    <>
      <h1>{"Welcome Page"}</h1>
      <div>
        {loginState && <button onClick={logoutClick}>
        {"Log out"}</button>}
        {!loginState && 
        <Link to="login">
        {"login"}
        </Link>}

        <br />
        <Link to="counter">{"Go to counter"}</Link>
      </div>
    </>
  );
};

export default Welcome;
