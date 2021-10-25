import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import Navbar from "./Navbar.js";
function Header({ darkMode }) {
  const value = darkMode;
  const logPropValue = (value) => {
    console.log(value);
  };

  return (
    <div className="header">
      <Logo className="logo" onClick={() => logPropValue(value)}></Logo>
      <hr className="bar"></hr>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
