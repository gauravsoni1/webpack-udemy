import React from "react";
import "./DropDown.scss";

const Dropdown = ({ options=[] }) => {
  return (
    <select>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
