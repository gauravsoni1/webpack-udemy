import React from "react";
import "./Glitch.scss";

function GlitchButton(props) {
  return <button className="glitch-button">{props.title}</button>;
}

export default GlitchButton;
