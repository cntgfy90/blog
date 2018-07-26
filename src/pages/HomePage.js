import React from 'react';
import Grid from '@material-ui/core/Grid';

import Header from '../components/Header';
import ArticlesListContainer from '../components/ArticlesListContainer';

import '../styles/base/base.css';
import '../styles/components/App.css';

const HomePage = (props) => (
  <div className={'app'}>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <ArticlesListContainer />
      </Grid>
    </Grid>
  </div>
);

export default HomePage;
