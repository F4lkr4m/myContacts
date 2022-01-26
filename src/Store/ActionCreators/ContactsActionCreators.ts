import { Dispatch } from "redux"
import { contactsActions } from "../Actions/ContactsAction"
import { Contact, ContactsState } from "../Reducers/ContactsReducer"
import { rootReducerType } from "../Store"


interface contactPayload {
  name: string;
  surname: string;
  tel: string;
  desc: string;
}

// ACTIONS
interface updateContactsAction {
  type: contactsActions.UPDATE_CONTACTS;
  payload: ContactsState;
}


// ACTION CREATORS
const updateContacts = (payload: ContactsState) => {
  const action: updateContactsAction = {
    type: contactsActions.UPDATE_CONTACTS,
    payload: payload,
  }
  return action;
}



export const addContact = (payload: contactPayload) => {
  return (dispatch: Dispatch, getState: () => rootReducerType) => {
    const currentContacts = getState().contactsReducer.contacts;
    currentContacts.push({
      id: 'id-1',
      ...payload,
    });

    dispatch(updateContacts({contacts: currentContacts}));
  }
}

export const editContact = (payload: Contact) => {
  return (dispatch: Dispatch, getState: () => rootReducerType) => {
    const currentContacts = getState().contactsReducer.contacts.map((contact) => {
      if (contact.id === payload.id) {
        return payload;
      }
      return contact;
    });
    
    dispatch(updateContacts({contacts: currentContacts}));
  }
}

export const deleteContact = (id: string) => {
  return (dispatch: Dispatch, getState: () => rootReducerType) => {
    const currentContacts = getState().contactsReducer.contacts.filter((contact) => {
      return contact.id !== id;
    });
    
    dispatch(updateContacts({contacts: currentContacts}));
  }
}

export type contactsActionTypes = updateContactsAction;
