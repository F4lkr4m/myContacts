import { getId } from '../../Utils/IdGenerator';
import { contactsActionTypes } from '../ActionCreators/ContactsActionCreators';
import { contactsActions } from '../Actions/ContactsAction';

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

let initialContactsState: ContactsState = {
  contacts: [],
};
if (localStorage['contacts']) {
  initialContactsState.contacts = JSON.parse(localStorage['contacts']);
  initialContactsState.contacts.forEach((contact) => {
    contact.id = getId();
    return contact;
  });
}

export const contactsReducer = (
  state: ContactsState = initialContactsState,
  action: contactsActionTypes,
): ContactsState => {
  switch (action.type) {
    case contactsActions.UPDATE_CONTACTS: {
      localStorage['contacts'] = JSON.stringify(action.payload.contacts);
      return action.payload;
    }
    default:
      return state;
  }
};
