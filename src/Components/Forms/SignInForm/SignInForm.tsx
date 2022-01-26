import React from "react";
import Button from "../../Button/Button";
import Fonts from "../../Fonts/Fonts";
import Input from "../../Input/Input";
import Error from "../../ErrorNotification/Error";
import '../Forms.css';
import { connect } from "react-redux";
import { rootReducerType } from "../../../Store/Store";
import { signIn, userDataPayload } from "../../../Store/ActionCreators/UserActionCreators";
import { bindActionCreators, Dispatch } from "redux";

interface SignInFormI {
  error: string;
  signIn: (payload: userDataPayload) => void;
}

const SignInForm = (props: SignInFormI) => {
  const kek = (event: React.MouseEvent) => {
    event.preventDefault();
    props.signIn({
      username: 'kek',
      password: 'kek',
    });
  };

  return (
    <form className="form">
      <Fonts type="h3" text="Уже зарегистрированы?" />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <Error message={props.error}/>
      <Button onClick={kek} label="Войти" />
    </form>
  )
}

const mapStateToProps = (combinedReducer: rootReducerType) => {
  return {
    error: combinedReducer.alertReducer.signInMessage,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signIn: bindActionCreators(signIn, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
