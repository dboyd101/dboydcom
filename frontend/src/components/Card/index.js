import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;
  return (
    <Link to={`/article/${article.id}`} className="">
      <div className="ui card">
        <div className="ui medium rounded image">
          <img src={imageUrl} alt={article.image.url} height="100" />
        </div>
        <div className="four wide column">
          <p className="description">
            {article.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
