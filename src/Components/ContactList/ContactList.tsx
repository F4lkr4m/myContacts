import React from "react";
import Button from "../Button/Button";
import Fonts from "../Fonts/Fonts";
import Input from "../Input/Input";
import './ContactList.css';

const ContactList = () => {
  return (
    <div className="contact-list">
      <Fonts type="h1" text="Ваша контактная книжка" />
      <div className="contact-list__search-box">
        <Input type="text" placeholder="Найти контакт" />
        <Button label="Найти" />
      </div>
      <Button label="Добавить контакт" />
      <ul className="contact-list__ul">
        <li className="contact-list__item">
          <Fonts type="h4" text="Сергей Щербаков" />
          <Fonts type="p" text="7-(916)-343-17-00" />
          <Fonts type="p" text="Какое-то описания для контакта или заметка" />
          <div className="contact-list__item-row">
            <Button label="Редактировать" />
            <Button label="Удалить" />
          </div>
        </li>
        <li className="contact-list__item">
          <Fonts type="h4" text="Сергей Щербаков" />
          <Fonts type="p" text="7-(916)-343-17-00" />
          <Fonts type="p" text="Какое-то описания для контакта или заметка" />
          <div className="contact-list__item-row">
            <Button label="Редактировать" />
            <Button label="Удалить" />
          </div>
        </li>
        <li className="contact-list__item">
          <Fonts type="h4" text="Сергей Щербаков" />
          <Fonts type="p" text="7-(916)-343-17-00" />
          <Fonts type="p" text="Какое-то описания для контакта или заметка" />
          <div className="contact-list__item-row">
            <Button label="Редактировать" />
            <Button label="Удалить" />
          </div>
        </li>
        <li className="contact-list__item">
          <Fonts type="h4" text="Сергей Щербаков" />
          <Fonts type="p" text="7-(916)-343-17-00" />
          <Fonts type="p" text="Какое-то описания для контакта или заметка" />
          <div className="contact-list__item-row">
            <Button label="Редактировать" />
            <Button label="Удалить" />
          </div>
        </li>
        <li className="contact-list__item">
          <Fonts type="h4" text="Сергей Щербаков" />
          <Fonts type="p" text="7-(916)-343-17-00" />
          <Fonts type="p" text="Какое-то описания для контакта или заметка" />
          <div className="contact-list__item-row">
            <Button label="Редактировать" />
            <Button label="Удалить" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ContactList;
