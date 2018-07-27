import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';
import { logout } from '../actions/authActions';

import '../styles/base/base.css';
import '../styles/components/App.css';

const HomePage = ({ isAuthenticated, logout }) => (
  <div className="ui grid app">
    <div className="sixteen wide column">
      <Header isAuthenticated={isAuthenticated} logout={logout} />
    </div>
    <div className="sixteen wide column">
      <ArticlesList />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { logout })(HomePage);
