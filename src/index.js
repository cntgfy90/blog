import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import decode from 'jwt-decode';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';
import { loginSuccess } from './actions/authActions';


if (localStorage.getItem('blogJWT')) {
  const payload = decode(localStorage.getItem('blogJWT'));
  const { email, confirmed } = payload;
  const user = { token: localStorage.getItem('blogJWT'), email, confirmed };
  store.dispatch(loginSuccess(user));
}

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
