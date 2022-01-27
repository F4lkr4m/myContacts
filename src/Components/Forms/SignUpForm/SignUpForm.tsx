import React, { useState } from 'react';
import Button from '../../Button/Button';
import Fonts from '../../Fonts/Fonts';
import Input from '../../Input/Input';
import Error from '../../ErrorNotification/Error';
import '../Forms.css';
import { rootReducerType } from '../../../Store/Store';
import { connect } from 'react-redux';
import { signUp, userDataSignUpPayload } from '../../../Store/ActionCreators/UserActionCreators';
import { bindActionCreators, Dispatch } from 'redux';

interface SignUpFormI {
  error: string;
  signUp: (payload: userDataSignUpPayload) => void;
}

const SignUpForm = (props: SignUpFormI) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const passwordRepeatHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.currentTarget.value);
  };

  const signUpHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    props.signUp({
      username: username,
      password: password,
      repeatPassword: repeatPassword,
    });
  };

  return (
    <form className="form">
      <Fonts type="h3" text="Присоединяйтесь!" />
      <Input type="text" onChange={usernameHandler} placeholder="username" />
      <Input type="password" onChange={passwordHandler} placeholder="password" />
      <Input type="password" onChange={passwordRepeatHandler} placeholder="password repeat" />
      <Error message={props.error} />
      <Button onClick={signUpHandler} label="Создать аккаунт" />
    </form>
  );
};

const mapStateToProps = (combinedReducer: rootReducerType) => {
  return {
    error: combinedReducer.alertReducer.signUpMessage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: bindActionCreators(signUp, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
