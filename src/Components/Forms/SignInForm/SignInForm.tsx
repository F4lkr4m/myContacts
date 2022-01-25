import React from "react";
import Button from "../../Button/Button";
import Fonts from "../../Fonts/Fonts";
import Input from "../../Input/Input";
import '../Forms.css';

const SignInForm = () => {
  return (
    <form className="form">
      <Fonts type="h3" text="Уже зарегистрированы?" />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <Button label="Войти" />
    </form>
  )
}

export default SignInForm;
