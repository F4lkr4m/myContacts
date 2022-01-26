import React, { useState } from "react";
import Button from "../Button/Button";
import Fonts from "../Fonts/Fonts";
import Input from "../Input/Input";
import './ContactList.css';
import searchSvg from '../../Assets/search.svg';
import editSvg from '../../Assets/edit.svg';
import deleteSvg from '../../Assets/delete.svg';
import ContactModal from "../ContactModal/ContactModal";
import { bindActionCreators, Dispatch } from "redux";
import { rootReducerType } from "../../Store/Store";
import { addContact, contactPayload, deleteContact, editContact } from "../../Store/ActionCreators/ContactsActionCreators";
import { connect } from "react-redux";
import { Contact } from "../../Store/Reducers/ContactsReducer";

interface ContactListI {
  contacts: Array<Contact>,
  add: (payload: contactPayload) => void;
  edit: (payload: Contact) => void;
  delete: (id: string) => void;
}

const ContactList = (props: ContactListI) => {
  const [modal, setModal] = useState(<></>);

  const openAddModal = () => {
    setModal(<ContactModal 
      title={'Добавить контакт'} 
      buttonLabel={'Добавить'}
      onSubmit={props.add} 
      onClose={() => setModal(<></>)} 
      />);
  }

  const editContact = (id: string) => {
    return (payload: contactPayload) => {
      props.edit({
        id: id,
        ...payload,
      });
    };
  }

  const openEditModal = (payload: Contact) => {
    return () => {
      setModal(<ContactModal 
        title={'Редактировать контакт'} 
        buttonLabel={'Готово'}
        initValue={{
          name: payload.name,
          surname: payload.surname,
          tel: payload.tel,
          desc: payload.desc,
        }}
        onSubmit={editContact(payload.id)}
        onClose={() => setModal(<></>)} 
      />);
    }
  }

  const deleteContact = (id: string) => {
    return () => {
      props.delete(id);
    }
  };

  return (
    <div className="contact-list">
      <Fonts type="h1" text="Ваша контактная книжка" />
      <div className="contact-list__search-box">
        <Input type="text" placeholder="Найти контакт" />
        <Button label="Найти" icon={searchSvg} />
      </div>
      <Button onClick={openAddModal} label="Добавить контакт" />
      <ul className="contact-list__ul">
      {props.contacts.map((contact) => {
        return (
          <li id={contact.id} className="contact-list__item">
            <Fonts type="h4" text={`${contact.name} ${contact.surname}`} />
            <Fonts type="p" text={contact.tel} />
            <Fonts type="p" text={contact.desc} />
            <div className="contact-list__item-row">
              <Button onClick={openEditModal(contact)} icon={editSvg} label="Редактировать" />
              <Button onClick={deleteContact(contact.id)}icon={deleteSvg} label="Удалить" />
            </div>
          </li>
        )
      })}
      </ul>
      {modal}
    </div>
  )
}

const mapStateToProps = (combinedReducer: rootReducerType) => {
  return {
    contacts: combinedReducer.contactsReducer.contacts,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    delete: bindActionCreators(deleteContact, dispatch),
    add: bindActionCreators(addContact, dispatch),
    edit: bindActionCreators(editContact, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
