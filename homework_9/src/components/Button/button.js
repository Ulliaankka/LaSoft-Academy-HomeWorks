import React from "react";
import './button.css'

const Button = ({text, castomClassName}) => {
    return (
        <button className={`common-btn ${castomClassName}`}>{text}</button>
    );
};

export default Button;