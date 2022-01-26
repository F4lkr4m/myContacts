import React from "react";
import Button from "../../Button/Button";
import Fonts from "../../Fonts/Fonts";
import Input from "../../Input/Input";
import Error from "../../ErrorNotification/Error";
import '../Forms.css';
import { rootReducerType } from "../../../Store/Store";
import { connect } from "react-redux";
import { signUp, userDataPayload } from "../../../Store/ActionCreators/UserActionCreators";
import { bindActionCreators, Dispatch } from "redux";

interface SignUpFormI {
  error: string;
  signUp: (payload: userDataPayload) => void;
}

const SignUpForm = (props: SignUpFormI) => {
  return (
    <form className="form">
      <Fonts type="h3" text="Присоединяйтесь!" />
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="password repeat" />
      <Error message={props.error}/>
      <Button label="Создать аккаунт" />
    </form>
  )
}

const mapStateToProps = (combinedReducer: rootReducerType) => {
  return {
    error: combinedReducer.alertReducer.signUpMessage,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: bindActionCreators(signUp, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
