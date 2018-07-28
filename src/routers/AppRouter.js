import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GuestRoute from '../components/routes/GuestRoute';
import UserRoute from '../components/routes/UserRoute';

import SignupPage from '../pages/SignupPage';
import ConfirmationPage from '../pages/ConfirmationPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import DashboardPage from '../pages/DashboardPage';

const AppRouter = ({ location }) => (
  <Router>
    <Switch>
      <Route location={location} path="/" component={HomePage} exact={true} />
      <Route location={location} path="/confirmation/:token" component={ConfirmationPage}/>
      <GuestRoute location={location} path="/login" component={LoginPage} />
      <GuestRoute location={location} path="/forgot_password" component={ForgotPasswordPage} />
      <GuestRoute location={location} path="/reset_password/:token" component={ResetPasswordPage} />
      <GuestRoute location={location} path="/signup" component={SignupPage} />
      <UserRoute location={location} path="/dashboard" component={DashboardPage} />
    </Switch>
  </Router>
);

export default AppRouter;
