import React from "react";

import { editDatePubArticle } from "../common/utils";

function ArticleItem(props) {
  return (
    <div className="article-item-container">
      <div className="article-item-date">
        {editDatePubArticle(props.data.pub_date)}
      </div>
      <div className="article-item-title">
        <div className="article-item-title-headline">
          <h3>{props.data.article_headline}</h3>
        </div>
        <div className="article-item-title-desc">
          <p>{props.data.article_content}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
