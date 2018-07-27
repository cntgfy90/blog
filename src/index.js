import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';
import { loginSuccess } from './actions/authActions';


if (localStorage.getItem('blogJWT')) {
  const user = { token: localStorage.getItem('blogJWT') };
  store.dispatch(loginSuccess(user));
}

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
