import React from "react";
import './header-navigation.css';
import { NavLink } from 'react-router-dom'

const HeaderNavigation = () => {
    return (
        <ul className="navigation-menu">
            <li className="nav-item"><NavLink className="nav-item-link" to="/courses">Courses</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" to="/teachers">Teachers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" to="/teachers">Prices</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" to="/about">About us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link btn-apply-link" to="/about">Apply now</NavLink></li>
        </ul>
    );
  };
  
export default HeaderNavigation;