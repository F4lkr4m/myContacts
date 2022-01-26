import React, { useState } from "react";
import Button from "../Button/Button";
import Fonts from "../Fonts/Fonts";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import './AddContactModal.css';

interface AddContactModalI {
  onClose: () => void;
}

const AddContactModal = (props: AddContactModalI) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [tel, setTel] = useState('');
  const [desc, setDesc] = useState('');

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  
  const surnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.currentTarget.value);
  };

  const telHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.currentTarget.value);
  };

  const descHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.currentTarget.value);
  };

  return (
    <div className="modal-wrapper modal--open">
      <div className="modal">
        <div className="modal__row">
          <Fonts type="h4" text="Добавить контакт" />
          <Button onClick={props.onClose} label="Закрыть" />
        </div>
      <Input onChange={nameHandler} type="text" placeholder="Имя" />
      <Input onChange={surnameHandler} type="text" placeholder="Фамилия" />
      <Input onChange={telHandler} type="tel" placeholder="Телефон" />
      <TextArea onChange={descHandler} placeholder="Заметка контакта" />
      <Button label="Добавить" />
    </div>
    </div>
  )
}

export default AddContactModal;
