// const getAllContactsApi = async token => {
//   axios.defaults.headers.common['Authorization'] = token;
//   try {
//     const { data } = await axios.get(`contacts`);
//     return data;
//   } catch (error) {
//     throw new Error(error.response.data.error.message);
//   }
// };

// export { getAllContactsApi };

// const deleteContactApi = async (idName, token) => {
//   axios.defaults.headers.common['Authorization'] = token;
//   try {
//     const { data } = await axios.delete(`contacts/${idName}`);
//     return data;
//   } catch (error) {
//     throw new Error(error.response.data.error.message);
//   }
// };

// export { deleteContactApi };

// const addContactApi = async (contactData, token) => {
//   axios.defaults.headers.common['Authorization'] = token;
//   try {
//     const { data } = await axios.post(`contacts`, contactData);
//     return data;
//   } catch (error) {
//     throw new Error(error.response.data.error.message);
//   }
// };

// export { addContactApi };
