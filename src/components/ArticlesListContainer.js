import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articlesActions';
import ArticlesList from './ArticlesList';

class ArticlesListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    const { articles } = this.props;
    console.log(this.props)
    return (
      <ArticlesList {...articles} />
    );
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles
});

export default connect(mapStateToProps)(ArticlesListContainer);
