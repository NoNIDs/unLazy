import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { getArticleById } from "../../actions/articles";

function ArticlePage(props) {
  const id = useParams();

  useEffect(() => {
    props.getArticleById(id.id);
  }, [id]);

  return (
    <div className="article-page-container">
      <div className="article-page-headline">
        {props.article.article_headline}
      </div>
      <div className="article-page-date">{props.article.pub_date}</div>
      <div className="article-page content">
        {props.article.article_content}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  article: state.articles.current,
});
export default connect(mapStateToProps, { getArticleById })(ArticlePage);
