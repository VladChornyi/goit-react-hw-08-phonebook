import { createReducer, combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  resetError,
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
  signOut,
} from './auth-actions';

export const userReducer = createReducer(
  {
    email: '',
    name: '',
    token: '',
  },
  {
    [signUpSuccess]: (_, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signInSuccess]: (_, { payload }) => ({
      email: payload.user.email,
      name: payload.user.name,
      token: payload.token,
    }),
    [signOut]: () => ({
      email: '',
      name: '',
      token: '',
    }),
  },
);

const errorReducer = createReducer('', {
  [signUpError]: (_, { payload }) => payload,
  [signInError]: (_, { payload }) => payload,
  [resetError]: () => '',
});

const loaderReducer = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
});
const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  user: persistReducer(persistConfigAuth, userReducer),
  error: errorReducer,
  isLoading: loaderReducer,
});
