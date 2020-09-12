import React from "react";

import emptyImage from "./empty.gif";
import "./Empty.scss";

const Empty = () => {
    return(
        <img src={ emptyImage } className="empty" />
    );
};

export default Empty;