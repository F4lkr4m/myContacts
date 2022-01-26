import React from "react";
import Fonts from "../../Components/Fonts/Fonts";
import SignInForm from "../../Components/Forms/SignInForm/SignInForm";
import SignUpForm from "../../Components/Forms/SignUpForm/SignUpForm";
import { UserState } from "../../Store/Reducers/UserReducer";
import { Navigate } from "react-router-dom";
import { constants } from "../../Utils/Constants";
import './SignView.css';
import { rootReducerType } from "../../Store/Store";
import { connect } from "react-redux";

interface SignViewI {
  user: UserState;
}

const SignView = (props: SignViewI) => {
  if (props.user.auth) {
    return (<Navigate to={constants.appPaths.home} />);
  }

  console.log(props.user.auth);

  return (
    <div className="sign-view">
      <div className="sign-view__logo">
        <Fonts type="h1" color="blue" text="My" />
        <Fonts type="h1" text="Contacts" />
      </div>
      <div className="sign-view__forms">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  )
}

const mapStateToProps = (combinedReducer: rootReducerType) => {
  return {
    user: {
      auth: combinedReducer.userReducer.auth,
      username: combinedReducer.userReducer.username,
    },
  };
}

export default connect(mapStateToProps)(SignView);