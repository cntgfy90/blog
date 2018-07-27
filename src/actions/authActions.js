import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './types';
import api from '../api';

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
});
export const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  err
});
export const logoutSuccess = () => ({
  type: LOGOUT
});

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const user = await api.user.login(credentials);
    localStorage.setItem('blogJWT', user.token);
    return dispatch(loginSuccess(user));
  } catch(err) {
    return dispatch(loginFailure(err.response));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('blogJWT');
  dispatch(logoutSuccess());
};
