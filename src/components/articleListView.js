import React from 'react';
import ArticleItem from './article';

export default function ArticlesView(props) {
  const { ArticlesList } = props;

  const renderArticleRows = () => {
    const rows = [];
    let currentRow = [];

    ArticlesList.forEach((article, index) => {
      currentRow.push(ArticleItem(article,index));

      if (currentRow.length === 3 || index === ArticlesList.length - 1) {
        rows.push(
          <div key={`row-${index}`} className="row align-items-center">
            {currentRow}
          </div>
        );
        currentRow = [];
      }
    });

    return rows;
  };

  return <div className="container">{renderArticleRows()}</div>;
}