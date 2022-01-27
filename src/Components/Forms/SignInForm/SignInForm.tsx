import React, { useState } from 'react';
import Button from '../../Button/Button';
import Fonts from '../../Fonts/Fonts';
import Input from '../../Input/Input';
import Error from '../../ErrorNotification/Error';
import '../Forms.css';
import { connect } from 'react-redux';
import { rootReducerType } from '../../../Store/Store';
import { signIn, userDataPayload } from '../../../Store/ActionCreators/UserActionCreators';
import { bindActionCreators, Dispatch } from 'redux';

interface SignInFormI {
  error: string;
  signIn: (payload: userDataPayload) => void;
}

const SignInForm = (props: SignInFormI) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const signInHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    props.signIn({
      username: username,
      password: password,
    });
  };

  return (
    <form className="form">
      <Fonts type="h3" text="Уже зарегистрированы?" />
      <Input type="text" onChange={usernameHandler} placeholder="username" />
      <Input type="password" onChange={passwordHandler} placeholder="password" />
      <Error message={props.error} />
      <Button onClick={signInHandler} label="Войти" />
    </form>
  );
};

const mapStateToProps = (combinedReducer: rootReducerType) => {
  return {
    error: combinedReducer.alertReducer.signInMessage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signIn: bindActionCreators(signIn, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
