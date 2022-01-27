import React from 'react';
import './Error.css';

interface ErrorI {
  message: string;
}

const Error = (props: ErrorI) => {
  return <>{props.message && props.message !== '' && <div className="error">{props.message}</div>}</>;
};

export default Error;
