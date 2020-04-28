import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? article.image.url
            : process.env.REACT_APP_BACKEND_URL + article.image.url;
        return (
          <div>
            <div className="ui segment">
            <img src={imageUrl} className="ui big image centered"/>
              <h1 class="ui header centered">{article.title}</h1>
            </div>

            <div className="ui segment">
              <div className="ui text">
                <ReactMarkdown source={article.content} />
                <p>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
