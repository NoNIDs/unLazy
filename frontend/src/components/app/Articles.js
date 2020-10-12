import React, { useEffect } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getArticles } from "../../actions/articles";

import ArticleItem from "../ArticlesComponents/ArticleItem";
// import ArticleList from "../ArticlesComponents/ArticleList";

function Articles(props) {
  useEffect(() => {
    props.getArticles();
  }, []);
  return (
    <div className="container">
      <h1 className="page-title">Features acticles</h1>
      <div className="articles-container">
        {props.articles.map((article) => (
          <ArticleItem key={article.article_id} data={article} />
        ))}
        {/* <ArticleList data={props.articles} /> */}
      </div>
    </div>
  );
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps, { getArticles })(Articles);
