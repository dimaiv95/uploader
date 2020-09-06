import React from "react";

import "./Image.scss"

const Image = ({ url }) => {
    return(
        <div className="image">
            <img src={ url } alt="image" />
        </div>
    );
};

export default React.memo(Image);