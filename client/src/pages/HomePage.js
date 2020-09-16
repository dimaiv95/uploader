import React, { Fragment, useMemo } from "react";
import { useParams } from "react-router-dom";
import Images from "../components/images";

import { PopupImagePage } from "../pages";

const HomePage = () => {
    const { id = null } = useParams();

    return( 
        <Fragment>
            { id && <PopupImagePage id={ id } /> } 
            <Images />
        </Fragment>
    );
};

export default HomePage;