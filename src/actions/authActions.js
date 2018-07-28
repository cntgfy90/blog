import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './types';
import api from '../api';

// Action generators for async login
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
// Action generator for logout
export const logoutSuccess = () => ({
  type: LOGOUT
});

// Async generator for login
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

// Async generator for signup
export const signup = (credentials) => (dispatch) => {
  return api.user.signup(credentials).then((user) => {
    localStorage.setItem('blogJWT', user.token);
    return dispatch(loginSuccess(user));
  });
};

// Async generator for confirmation
export const confirm = (token) => (dispatch) => {
  return api.user.confirm(token).then((user) => {
    localStorage.setItem('blogJWT', user.token);
    return dispatch(loginSuccess(user))
  });
};

export const resetPasswordRequest = ({ email }) => () => {
  return api.user.resetPasswordRequest(email);
};

export const validateToken = (token) => () => {
  return api.user.validateToken(token);
};

export const resetPassword = (data) => () => {
  return api.user.resetPassword(data);
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('blogJWT');
  dispatch(logoutSuccess());
};
