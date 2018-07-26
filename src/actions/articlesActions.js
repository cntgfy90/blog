import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from './types';
import axios from 'axios';
import Butter from 'buttercms';
const butter = Butter('279b16d7d590f5cf96218c04407a5760ccf53e2d');

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
    const articles = await butter.post.list({page, page_size});
    dispatch(fetchArticlesSuccess(articles.data.data));
  } catch(err) {
    dispatch(fetchArticlesFailure(err));
  }
};
