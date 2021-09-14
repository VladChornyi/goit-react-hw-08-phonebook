import ContactsForm from '../../components/contactsForm/ContactsForm';
import ContactsList from '../../components/contactsList/ContactsList';
import Filter from '../../components/filter/Filter';
import s from './ContactsPage.module.css';

const Contacts = () => {
  return (
    <>
      <div className={s.box}>
        <div>
          <h2 className={s.title}>Phonebook</h2>
          <ContactsForm />
        </div>
        <div>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </>
  );
};

export default Contacts;
