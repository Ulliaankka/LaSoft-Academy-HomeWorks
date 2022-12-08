import React from "react";
import './btn-back.css';
import btnBack from './backBtn.png';
import { NavLink } from 'react-router-dom'

const BattonBack = (props) => {
    if (props.isShow){
    return (
        <div className="back-icon">
            <img src={btnBack} alt="logo" />
            <h5><NavLink className="back-link" to="/home">Back</NavLink></h5>
        </div>
    );
    };
  };
  
export default BattonBack;