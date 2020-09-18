import React from "react";

import loadingImage from "./loading.svg";
import "./Spiner.scss";

const Spiner = () => {
    return(
        <img src={ loadingImage } className="spiner" />
    );
};

export default Spiner;