import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const toggleCompletedRequest = createAction('contacts/toggleCompletedRequest');
const toggleCompletedSuccess = createAction('contacts/toggleCompletedSuccess');
const toggleCompletedError = createAction('contacts/toggleCompletedError');

const changeFilter = createAction('phonebook/changeFilter');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};

// ===== Без json-server =====

// const addContact = createAction('phonebook/add', (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//     completed: false,
//   },
// }));

// const deleteContact = createAction('phonebook/delete');
// const toggleCompleted = createAction('phonebook/toggleCompleted');

// ===== БЕЗ БИБЛИОТЕКИ TOOLKIT =====

// const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//     completed: false,
//   },
// });

// const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });

// const toggleCompleted = contactId => ({
//   type: TOGGLE_COMPLETED,
//   payload: contactId,
// });
