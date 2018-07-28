import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/types';

const initialState = {
  info: {},
  isAuthenticated: false,
  didInvalidate: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        info: { ...action.user }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        didInvalidate: true,
        info: { ...action.err }
      };
    case LOGOUT:
      return { };
    default:
      return state;
  }
}
