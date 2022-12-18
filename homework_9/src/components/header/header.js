import React from "react";
import "../../Assets/General-styles/general-styles.css";
import "./header.css";
import logo from "../../Assets/Images/logo.svg";
import mobMenubar from "../../Assets/Images/mob-menu.png";
import HeaderNavigation from "./Header-navigation/header-navigation";
import HeaderLogo from "./Header-logo/header-logo";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="main-part">
          <div className="navigation">
            <HeaderLogo />
            <HeaderNavigation />
            <div className="menu-icon">
              <img src={mobMenubar} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
