import React from "react";
import Button from "../../Button/Button";
import Fonts from "../../Fonts/Fonts";
import Input from "../../Input/Input";
import '../Forms.css';

const SignUpForm = () => {
  return (
    <form className="form">
      <Fonts type="h3" text="Присоединяйтесь!" />
      <Input type="text" placeholder="username" />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="password repeat" />
      <Button label="Создать аккаунт" />
    </form>
  )
}

export default SignUpForm;
