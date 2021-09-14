import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from '../../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';
import { getFilteredContactsSelector } from '../../redux/phonebook/phonebook-selectors';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContactsSelector);

  const onRemoveContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ul className={s.list}>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <li key={contact.id} className={s.item}>
              {`${contact.name} : ${contact.number}`}
              <button
                className={s.button}
                type="button"
                name="delete"
                onClick={() => onRemoveContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactsList;
