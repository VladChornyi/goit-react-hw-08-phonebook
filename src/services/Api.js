import axios from 'axios';
import { authTokenSelector } from '../redux/auth/auth-selectors';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContactsApi = async getState => {
  return axios
    .get('contacts', {
      headers: { Authorization: `Bearer ${authTokenSelector(getState())}` },
    })
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

export { getContactsApi };

const addContactApi = async (contactData, getState) => {
  return axios
    .post(`contacts`, contactData, {
      headers: { Authorization: `Bearer ${authTokenSelector(getState())}` },
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      throw error;
    });
};

export { addContactApi };

const deleteContactApi = (contactId, getState) => {
  return axios
    .delete(`contacts/${contactId}`, {
      headers: { Authorization: `Bearer ${authTokenSelector(getState())}` },
    })
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

export { deleteContactApi };

const signUpApi = async user => {
  try {
    const { data } = await axios.post('users/signup', user);
    return data;
  } catch (error) {
    throw error;
  }
};
export { signUpApi };

const signInApi = async user => {
  try {
    const { data } = await axios.post('users/login', user);
    return data;
  } catch (error) {
    throw error;
  }
};
export { signInApi };

const logOutApi = async authToken => {
  axios.defaults.headers.common['Authorization'] = authToken;
  try {
    return await axios.post('users/logout');
  } catch (error) {
    throw error;
  }
};
export { logOutApi };
