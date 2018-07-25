import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/article" component={App} />
      <Route component={App} />
    </Switch>
  </Router>
);

export default AppRouter;
