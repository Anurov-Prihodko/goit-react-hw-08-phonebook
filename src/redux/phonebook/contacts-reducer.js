import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
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
} from './contacts-actions';

const addContactReducer = (state, { payload }) => {
  if (state.find(({ name }) => name === payload.name)) {
    alert(`${payload.name} is already in contacts.`);
    return [...state];
  }
  return [...state, payload];
};

const deleteContactReducer = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const toggleCompletedReducer = (state, { payload }) =>
  state.map(contact => (contact.id === payload.id ? payload : contact));

const note = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: addContactReducer,
  [deleteContactSuccess]: deleteContactReducer,
  [toggleCompletedSuccess]: toggleCompletedReducer,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

export default combineReducers({
  note,
  filter,
  loading,
});
