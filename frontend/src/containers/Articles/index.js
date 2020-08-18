import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import '../../index.css';

const Home = () => {
    return (
        <div>
            <div className="ui container">
                <Query query={ARTICLES_QUERY}>
                    {({data: {articles}}) => {
                        return <Articles articles={articles}/>;
                    }}
                </Query>
            </div>
        </div>
    );
};

export default Home;
