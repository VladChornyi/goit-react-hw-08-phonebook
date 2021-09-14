import { addContactApi, deleteContactApi, getContactsApi } from '../../services/Api';
import {
  fetchAddContactsError,
  fetchAddContactsRequest,
  fetchAddContactsSuccess,
  fetchDeleteContactsError,
  fetchDeleteContactsRequest,
  fetchDeleteContactsSuccess,
  fetchGetContactsError,
  fetchGetContactsRequest,
  fetchGetContactsSuccess,
} from './phonebook-actions';

export const getContacts = () => async (dispatch, getState) => {
  dispatch(fetchGetContactsRequest());

  try {
    const contacts = await getContactsApi(getState);
    dispatch(fetchGetContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchGetContactsError(error));
  }
};

export const addContact = contactData => async (dispatch, getState) => {
  dispatch(fetchAddContactsRequest());

  try {
    const contact = await addContactApi(contactData, getState);
    dispatch(fetchAddContactsSuccess(contact));
  } catch (error) {
    dispatch(fetchAddContactsError(error));
  }
};

export const deleteContact = contactId => async (dispatch, getState) => {
  dispatch(fetchDeleteContactsRequest());

  try {
    await deleteContactApi(contactId, getState);
    dispatch(fetchDeleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(fetchDeleteContactsError(error));
  }
};
