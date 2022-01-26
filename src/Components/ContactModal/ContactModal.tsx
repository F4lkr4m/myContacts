import React, { useState } from "react";
import { contactPayload } from "../../Store/ActionCreators/ContactsActionCreators";
import Button from "../Button/Button";
import Fonts from "../Fonts/Fonts";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import './ContactModal.css';

interface ContactModalI {
  onClose: () => void;
  onSubmit: (payload: contactPayload) => void;
  title: string;
  buttonLabel: string;
  initValue?: {
    name?: string,
    surname?: string,
    desc?: string,
    tel?: string,
  }
}

const ContactModal = (props: ContactModalI) => {
  console.log(props.initValue);
  const [name, setName] = useState(props.initValue?.name ? props.initValue.name : '');
  const [surname, setSurname] = useState(props.initValue?.surname ? props.initValue.surname : '');
  const [tel, setTel] = useState(props.initValue?.tel ? props.initValue.tel : '');
  const [desc, setDesc] = useState(props.initValue?.desc ? props.initValue.desc : '');

  console.log(name, surname);

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

  const buttonSubmitHandler = (event: React.MouseEvent) => {
    props.onSubmit({
      name: name,
      surname: surname,
      tel: tel,
      desc: desc,
    });
    props.onClose();
  }

  return (
    <div className="modal-wrapper modal--open">
      <div className="modal">
        <div className="modal__row">
          <Fonts type="h4" text={props.title} />
          <Button onClick={props.onClose} label="Закрыть" />
        </div>
      <Input value={name} onChange={nameHandler} type="text" placeholder="Имя" />
      <Input value={surname} onChange={surnameHandler} type="text" placeholder="Фамилия" />
      <Input value={tel} onChange={telHandler} type="tel" placeholder="Телефон" />
      <TextArea value={desc} onChange={descHandler} placeholder="Заметка контакта" />
      <Button onClick={buttonSubmitHandler} label={props.buttonLabel} />
    </div>
    </div>
  )
}

export default ContactModal;
