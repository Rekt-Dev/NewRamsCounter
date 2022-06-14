import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Login from "./components/Login";
import "./styles.css";
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
