import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import s from '../App.module.css';
import Spinner from '../components/Spinner/Spinner';
import Modal from '../components/Modal';
import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
import {
  fetchContacts,
  getLoading,
  getContactsLength,
  // getCompleteContactsCount,
} from '../redux/phonebook';
import IconButton from '../components/IconButton';

function PhonebookViews() {
  const totalContactsCount = useSelector(getContactsLength);
  // const completeContactsCount = useSelector(getCompleteContactsCount);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const togleModal = () => setIsModalOpen(state => !state);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={s.container}>
      {/* <h1 className={s.mainTitle}>Phonebook</h1> */}
      {/* <p className={s.text}>Number of selected: {completeContactsCount} </p> */}

      <Filter />
      <IconButton onClick={togleModal} aria-label="add contact">
        <AiOutlinePlusCircle className="iconButton" />
      </IconButton>

      <p className={s.text}>Total contacts: {totalContactsCount}</p>
      <h2 className={s.mainTitle}>Contacts:</h2>
      {isLoading && <Spinner />}
      {isModalOpen && (
        <Modal onClose={togleModal}>
          <ContactForm />
        </Modal>
      )}
      <ContactList onSave={togleModal} />
    </div>
  );
}

export default PhonebookViews;
