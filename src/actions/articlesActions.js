import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from './types';
import api from '../api';

export const fetchArticlesRequest = () => ({
  type: FETCH_ARTICLES_REQUEST
});
export const fetchArticlesSuccess = (items) => ({
  type: FETCH_ARTICLES_SUCCESS,
  items
});
export const fetchArticlesFailure = (err) => ({
  type: FETCH_ARTICLES_FAILURE,
  err
});

export const fetchArticles = (page, page_size) => async (dispatch) => {
  try {
    dispatch(fetchArticlesRequest());
    const articles = await api.articles.fetch(page, page_size);
    dispatch(fetchArticlesSuccess(articles.data.data));
  } catch(err) {
    dispatch(fetchArticlesFailure(err));
  }
};
