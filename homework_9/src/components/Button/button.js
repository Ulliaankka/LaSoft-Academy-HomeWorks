import React from "react";
import "./button.css";

const Button = ({
  text,
  castomClassName,
  onClick,
  disabled,
  color = "color",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`common-btn ${castomClassName} color-${color}`}
    >
      {text}
    </button>
  );
};

export default Button;
