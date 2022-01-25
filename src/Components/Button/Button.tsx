import React from 'react';
import './Button.css';

interface ButtonI {
  icon?: string;
  label?: string;
  wide?: boolean;
  onClick?: () => void; 
}

const Button = (props: ButtonI) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button;
