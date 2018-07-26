import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
      return action.user;
    case LOGIN_FAILURE:
    default:
      return state;
  }
}
