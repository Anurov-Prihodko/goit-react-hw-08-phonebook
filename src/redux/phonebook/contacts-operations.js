import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:4040';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// ===== Асинхронный вариант =====
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }

  // axios
  //   .get('/mainState')
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = (name, number) => dispatch => {
  const note = {
    name,
    number,
    completed: false,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', note)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error)));
  };

export { addContact, deleteContact, toggleCompleted, fetchContacts };
