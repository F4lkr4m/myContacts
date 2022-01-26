import { contactsActionTypes } from "../ActionCreators/ContactsActionCreators"
import { contactsActions } from "../Actions/ContactsAction";

export interface Contact {
  id: string;
  name: string;
  surname: string;
  desc: string;
  tel: string;
}

export interface ContactsState {
  contacts: Array<Contact>;
}

const initialContactsState: ContactsState = {
  contacts: [{
    id: 'id-1',
    name: 'Сергей',
    surname: 'Щербаков',
    tel: 'Лолер',
    desc: 'Какое-то описание этого гандона'
  }],
}

export const contactsReducer = (state: ContactsState = initialContactsState, action: contactsActionTypes): ContactsState => {
  switch(action.type) {
    case contactsActions.UPDATE_CONTACTS: {
      return action.payload;
    }
    default: 
      return state;
  }
}
