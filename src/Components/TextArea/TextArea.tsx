import React from "react";
import './TextArea.css';

interface TextAreaI {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: TextAreaI) => {
  return (
    <textarea 
      className="textarea"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}>

    </textarea>
  )
}

export default TextArea;