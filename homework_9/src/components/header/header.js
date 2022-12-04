import React from "react";
import './header.css';
import HeaderLogo from './Header-logo/header-logo';
import HeaderMobBurger from './Header-mob-burger/header-mob-burger';
import HeaderNavigation from './Header-navigation/header-navigation';

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