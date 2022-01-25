import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Fonts from './Components/Fonts/Fonts';
import Input from './Components/Input/Input';
import TextArea from './Components/TextArea/TextArea';

function App() {
  return (
    <>
      <Fonts type="h1" color="black" text="Какой-то текст" />
      <Button label="Нажми на меня" />
      <Input type="email" placeholder="Email" />
      <TextArea placeholder="Заметка для пользователя" />
    </>
  );
}

export default App;
