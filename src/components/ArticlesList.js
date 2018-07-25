import React from 'react';
import Butter from 'buttercms';
import Article from './Article';
import Grid from '@material-ui/core/Grid';
import '../styles/components/ArticlesList.css';
const butter = Butter('279b16d7d590f5cf96218c04407a5760ccf53e2d');

class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    butter.post.list({page: 1, page_size: 10})
    .then(function(resp) {
      console.log(resp.data)
    }).catch(function(resp) {
      console.log(resp)
    });
  }


  render() {
    return (
      <div>
      </div>
    );
  }
}

export default ArticlesList;
