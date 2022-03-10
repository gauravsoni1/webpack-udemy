import React from "react";
import './button.scss';

const Button = (props) => {
  return <button {...props}>{props.title}</button>;
};

export default Button;
