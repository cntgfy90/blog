import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
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

export const login = (credentials) => async (dispatch) => {
 try {
   dispatch(loginRequest);
   const user = await api.user.login(credentials);
   dispatch(loginSuccess(user));
 } catch(err) {
   dispatch(loginFailure(err));
 }
};
