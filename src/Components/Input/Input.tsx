import React from 'react';
import './Input.css';

interface InputI {
  type: 'tel' | 'text' | 'password' | 'email';
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
}

const Input = (props: InputI) => {
  return (
    <label className={'input__label'}>
      <input
        className={'input'}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </label>
  );
};

export default Input;
