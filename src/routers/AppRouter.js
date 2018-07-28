import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GuestRoute from '../components/routes/GuestRoute';
import UserRoute from '../components/routes/UserRoute';

import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

const AppRouter = ({ location }) => (
  <Router>
    <Switch>
      <Route location={location} path="/" component={HomePage} exact={true} />
      <GuestRoute location={location} path="/login" component={LoginPage} />
      <GuestRoute location={location} path="/signup" component={SignupPage} />
      <UserRoute location={location} path="/dashboard" component={DashboardPage} />
    </Switch>
  </Router>
);

export default AppRouter;
