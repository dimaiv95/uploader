import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Images from "../components/images";

import { PopupImagePage } from "../pages";

const HomePage = () => {
    const { id = null } = useParams();

    return( 
        <Fragment>
            { id && <PopupImagePage /> }
            <Images />
        </Fragment>
    );
};

export default HomePage;