import React from "react";
import Button from "../Button/Button";
import Fonts from "../Fonts/Fonts";
import Input from "../Input/Input";
import './ContactList.css';
import searchSvg from '../../Assets/search.svg';
import editSvg from '../../Assets/edit.svg';
import deleteSvg from '../../Assets/delete.svg';

const ContactList = () => {
  return (
    <div className="contact-list">
      <Fonts type="h1" text="Ваша контактная книжка" />
      <div className="contact-list__search-box">
        <Input type="text" placeholder="Найти контакт" />
        <Button label="Найти" icon={searchSvg} />
      </div>
      <Button label="Добавить контакт" />
      <ul className="contact-list__ul">
        <li className="contact-list__item">
          <Fonts type="h4" text="Сергей Щербаков" />
          <Fonts type="p" text="7-(916)-343-17-00" />
          <Fonts type="p" text="Какое-то описания для контакта или заметка" />
          <div className="contact-list__item-row">
            <Button icon={editSvg} label="Редактировать" />
            <Button icon={deleteSvg} label="Удалить" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContactList;
