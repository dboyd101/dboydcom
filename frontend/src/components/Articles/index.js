import React from "react";
import Card from "../Card";

const Articles = ({articles}) => {
    const leftArticlesCount = Math.ceil(articles.length / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);

    return (
        <div className="ui divided three column grid center aligned">
            {articles.map((article, i) => {
                return <Card article={article} key={`article__${article.id}`}/>;
            })}
        </div>
    );
};

export default Articles;
