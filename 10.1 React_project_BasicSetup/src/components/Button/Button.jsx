import React from 'react';
import './Button.scss';

function Button(props) {
  return <button {...props}>{props.title}</button>;
}

export default Button;
