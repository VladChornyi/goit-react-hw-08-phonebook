import { logOutApi, signInApi, signUpApi } from '../../services/Api';

import {
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
  signOut,
} from './auth-actions';

export const signUp = user => async dispatch => {
  dispatch(signUpRequest());
  try {
    const data = await signUpApi(user);
    dispatch(signUpSuccess(data));
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

export const signIn = user => async dispatch => {
  dispatch(signInRequest());
  try {
    const data = await signInApi(user);
    dispatch(signInSuccess(data));
  } catch (error) {
    dispatch(signInError(error.message));
  }
};

export const logOut = token => async dispatch => {
  try {
    await logOutApi(token);
    dispatch(signOut());
  } catch (error) {
    dispatch(signInError(error.message));
  }
};
