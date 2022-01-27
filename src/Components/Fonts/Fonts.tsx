import React from 'react';
import './Fonts.css';

interface FontsI {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  text: string;
  color?: 'black' | 'blue' | 'white';
}

const Fonts = (props: FontsI) => {
  return <props.type className={`${props.color ? 'font_' + props.color : ''}`}>{props.text}</props.type>;
};

export default Fonts;
