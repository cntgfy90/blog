import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRouter';

render(
  <AppRouter />,
  document.getElementById('root')
);
registerServiceWorker();
