import React from "react";
import Fonts from "../../Components/Fonts/Fonts";
import SignInForm from "../../Components/Forms/SignInForm/SignInForm";
import SignUpForm from "../../Components/Forms/SignUpForm/SignUpForm";
import './SignView.css';

const SignView = () => {
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

export default SignView;
