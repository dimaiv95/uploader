import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Posts from "../components/posts";

import { SinglePostPage } from "../pages";

const HomePage = () => {
    const { id = null } = useParams();

    return( 
        <Fragment>
            { id && <SinglePostPage id={ id } /> } 
            <Posts />
        </Fragment>
    );
};

export default HomePage;