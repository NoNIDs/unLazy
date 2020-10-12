import React, { Fragment } from "react";

import { AutoSizer, List } from "react-virtualized";
import ArticleItem from "../ArticlesComponents/ArticleItem";

function ArticleList(props) {
  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) {
    const content = isScrolling && (
      <ArticleItem key={key} article={props.data[index]}></ArticleItem>
    );
    return <Fragment key={key}>{content}</Fragment>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 auto" }}>
        <AutoSizer>
          {({ onRowsRendered, registerChild }) => (
            <List
              height={200}
              onRowsRendered={onRowsRendered}
              ref={registerChild}
              rowCount={10}
              rowHeight={20}
              rowRenderer={rowRenderer}
              width={300}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default ArticleList;
