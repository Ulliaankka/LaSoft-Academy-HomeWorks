import React from "react";
import './header.css';
import HeaderLogo from './header-logo/header-logo';
import HeaderMobBurger from './header-mob-burger/header-mob-burger';
import HeaderNavigation from './header-navigation/header-navigation';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navigation">
                    <HeaderLogo />
                    <HeaderMobBurger />
                    <HeaderNavigation />
                </div>
            </div>
        </header>
    );
  };
  
  export default Header;