import React from 'react';
import './button.scss';

function Button(props) {
  return <button {...props}>{props.title}</button>;
}

export default Button;
