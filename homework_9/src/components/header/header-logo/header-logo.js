import React from "react";
import './header-logo.css';
import logo from './logo.svg';

const HeaderLogo = (props) => {
    if (props.isShow === true){
      return (
        <div className="header-logo">
            <img src={logo} className="logo" alt="logo" />
        </div>
      );
    }
  };
  
export default HeaderLogo;