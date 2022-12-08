import React from "react";
import './header.css';
import HeaderLogo from './Header-logo/header-logo';
import HeaderMobBurger from './Header-mob-burger/header-mob-burger';
import HeaderNavigation from './Header-navigation/header-navigation';
import { useLocation } from 'react-router-dom';
import BattonBack from "./Btn-back/btn-back";

const Header = () => {
    
    const location = useLocation();
    return (
        <header>
            <div className="container">
                <div className="navigation">
                    <HeaderLogo isShow = {true}/>
                    <HeaderMobBurger isShow = {location.pathname != '/apply'}/>
                    <HeaderNavigation isShow = {location.pathname != '/apply'}/>
                    <BattonBack isShow = {location.pathname === '/apply'} />
                </div>
            </div>
        </header>
    );
  };
  
  export default Header;