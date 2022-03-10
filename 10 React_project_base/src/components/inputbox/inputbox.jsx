import React from "react";
import "./inputbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons"

const Inputbox = (props) => {
  return (
    <div className="textinput-container">
      <input placeholder={props.placeholder} type="text"></input>
      <div className="input-error">
        <FontAwesomeIcon icon={faExclamation} />
        Error message
      </div>
    </div>
  );
};

export default Inputbox;
