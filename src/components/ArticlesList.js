import React from 'react';
import Article from './Article';
import Grid from '@material-ui/core/Grid';
import '../styles/components/ArticlesList.css';

const ArticlesList = (props) => (
  <div>
    {
      props.items.map((article, index) => <Article key={index} {...article} />)
    }
  </div>
);

export default ArticlesList;
