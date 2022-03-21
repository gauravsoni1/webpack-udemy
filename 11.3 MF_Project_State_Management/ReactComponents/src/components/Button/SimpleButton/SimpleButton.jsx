import React from "react";
import "./SimpleButton.scss";

function SimpleButton(props) {
  return <button className="simpleButton" {...props}>{props.title}</button>;
}

export default SimpleButton;
