import React from "react";
import Query from "../Query";
import {Link} from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
    return (
        <div id="mainmenu" className="ui inverted vertical masthead center aligned segment">
            <Query query={CATEGORIES_QUERY} id={null}>
                {({data: {categories}}) => {
                    return (
                        <div>
                            <nav className="">
                                <div className="">
                                    <Link to={'/'}>
                                    <h1 className="ui inverted header">davidboyd</h1>
                                    </Link>
                                </div>
                                <div className="ui inverted white center aligned compact menu">
                                    {categories.map((category, i) => {
                                            return (
                                                <span  id="main_nav_titles" className="item" key={category.id}>
                                                    <Link
                                                        to={`/category/${category.id}`}
                                                        className="">{category.name}
                                                    </Link>
                                                </span>
                                            );
                                        })}
                                </div>
                            </nav>
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};

export default Nav;
