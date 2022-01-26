import React from "react";
import './TextArea.css';

interface TextAreaI {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: TextAreaI) => {
  return (
    <textarea 
      className="textarea"
      placeholder={props.placeholder}
      onChange={props.onChange}>

    </textarea>
  )
}

export default TextArea;