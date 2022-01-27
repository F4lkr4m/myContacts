import { Contact } from "../Store/Reducers/ContactsReducer";

export const search = (searchValue: string, contacts: Array<Contact>) => {
  const loweredValue = searchValue.toLowerCase();
  const value = loweredValue.trim();
  const hideIds = new Set();

  if (value !== '') {
    contacts.forEach((contact) => {
      if (contact.name.toLowerCase().search(value) === -1 &&
          contact.surname.toLowerCase().search(value) === -1 &&
          contact.tel.toLowerCase().search(value) === -1 &&
          contact.desc.toLowerCase().search(value) === -1) {
        hideIds.add(contact.id);
      }
    });
  }
  return hideIds;
}
