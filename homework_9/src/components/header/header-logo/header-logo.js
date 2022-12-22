import React from "react";
import "./header-logo.css";
import logo from "../../../Assets/Images/logo.svg";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default HeaderLogo;
