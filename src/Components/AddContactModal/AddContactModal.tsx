import React from "react";
import Button from "../Button/Button";
import Fonts from "../Fonts/Fonts";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import './AddContactModal.css';

interface AddContactModalI {
  onClose: () => void;
}

const AddContactModal = (props: AddContactModalI) => {
  return (
    <div className="modal-wrapper modal--open">
      <div className="modal">
        <div className="modal__row">
          <Fonts type="h4" text="Добавить контакт" />
          <Button onClick={props.onClose} label="Закрыть" />
        </div>
      <Input type="text" placeholder="Имя" />
      <Input type="text" placeholder="Фамилия" />
      <Input type="tel" placeholder="Телефон" />
      <TextArea placeholder="Заметка контакта" />
      <Button label="Добавить" />
    </div>
    </div>
  )
}

export default AddContactModal;