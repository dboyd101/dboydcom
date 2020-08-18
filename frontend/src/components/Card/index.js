import React from "react";
import {Link} from "react-router-dom";


const Card = ({article}) => {
    const imageUrl =
        process.env.NODE_ENV !== "development"
            ? article.image.url
            : process.env.REACT_APP_BACKEND_URL + article.image.url;
    return (

        <div className="ui cards">
        <div className="ui  grid ">
            <div className="nomargin">
            <div className="ui equal width compact grid">
                <Link to={`/article/${article.id}`} className="">
                    <div className="ui medium circular image">
                    <img src={imageUrl} alt={article.image.url} height="100"/>
                    </div>
                    <h3 className="center">
                        {article.title}
                    </h3>

                </Link>
            </div>
            </div>
            </div>
        </div>

    );
};

export default Card;
