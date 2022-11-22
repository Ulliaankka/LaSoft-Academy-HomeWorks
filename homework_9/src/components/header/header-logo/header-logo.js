import React from "react";
import './header-logo.css';
import logo from './logo.svg';

const HeaderLogo = () => {
    return (
            <div className="header-logo">
                <a href="#"><img src={logo} className="logo" alt="logo" /></a>
            </div>
    );
  };
  
export default HeaderLogo;