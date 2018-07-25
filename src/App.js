import React from 'react';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header';
import ArticlesList from './components/ArticlesList';

const App = (props) => (
  <Grid container className={'app'} spacing={16}>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <ArticlesList />
    </Grid>
  </Grid>
);

export default App;
