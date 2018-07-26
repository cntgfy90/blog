import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default AppRouter;
