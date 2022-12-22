import React from "react";
import "./header-navigation.css";
import { NavLink } from "react-router-dom";
import Button from "../../Button/button";
import { useNavigate } from "react-router";

const HeaderNavigation = () => {
  let navigate = useNavigate();{
    return (
      <ul className="navigation-menu">
        <li className="nav-item">
          <NavLink className="nav-item-link" to="/courses">
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item-link" to="/teachers">
            Teachers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item-link" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <Button
            text="Apply"
            color="green"
            onClick={() => navigate("/apply")}
          />
        </li>
      </ul>
    );
  }
};

export default HeaderNavigation;
