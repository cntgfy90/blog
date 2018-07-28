import {
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './types';
import api from '../api';

// Action generators for async signup
export const signupRequest = () => ({
  type: SIGNUP_REQUEST
});
export const signupFailure = (err) => ({
  type: SIGNUP_FAILURE,
  err
});
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
export const signup = (credentials) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const user = await api.user.signup(credentials);
    localStorage.setItem('blogJWT', user.token);
    return dispatch(loginSuccess(user)); // dispatch user logged in
  } catch(err) {
    return dispatch(signupFailure(err.response));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('blogJWT');
  dispatch(logoutSuccess());
};
