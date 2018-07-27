import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articlesActions';
import Article from './Article';

class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchArticles(1, 10));
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        { articles.items.map((article, index) => <Article key={index} article={article} />) }
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  articles: store.articles
});

export default connect(mapStateToProps)(ArticlesList);
