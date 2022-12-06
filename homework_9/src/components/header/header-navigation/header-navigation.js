import React from "react";
import './header-navigation.css';
import { NavLink } from 'react-router-dom'
import Button from "../../Button/button";

const HeaderNavigation = () => {
    return (
        <ul className="navigation-menu">
            <li className="nav-item"><NavLink className="nav-item-link" to="/courses">Courses</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" to="/teachers">Teachers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" to="/teachers">Prices</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" to="/about">About us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" >
                    <Button text={'Apply now'} castomClassName='btn-apply-first' />       
            </NavLink></li>
            
        </ul>
    );
  };
  
export default HeaderNavigation;