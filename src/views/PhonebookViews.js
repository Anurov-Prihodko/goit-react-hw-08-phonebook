import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import Filter from '../components/Filter';
import s from '../App.module.css';
import Spinner from '../components/Spinner/Spinner';
import Modal from '../components/Modal';
import { AiOutlinePlusCircle } from 'react-icons/ai';
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
    <>
      <Container>
        <div className={s.block}>
          <Filter />
          <IconButton onClick={togleModal} aria-label="add contact">
            <AiOutlinePlusCircle className="iconButton" />
          </IconButton>
        </div>
        <p className={s.text}>Total contacts: {totalContactsCount}</p>
        <h3 className={s.mainTitle}>Contacts:</h3>
        {isLoading && <Spinner />}
        {isModalOpen && (
          <Modal onClose={togleModal}>
            <ContactForm onSave={togleModal} />
          </Modal>
        )}
        <ContactList />
      </Container>
    </>
  );
}

export default PhonebookViews;
