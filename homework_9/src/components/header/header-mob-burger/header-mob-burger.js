import React from "react";
import './header-mob-burger.css';
import mobMenubar from './mob-menu.png';

const HeaderMobBurger = () => {
    return (
        <div className="menu-icon">
            <img src={mobMenubar} alt="logo" />
        </div>
    );
  };
  
export default HeaderMobBurger;