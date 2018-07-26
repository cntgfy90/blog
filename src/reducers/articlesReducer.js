import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from '../actions/types';

export const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.items
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    default:
      return state;
  }
}
