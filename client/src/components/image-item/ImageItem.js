import React from "react";

import { useProgressiveImage } from "../../hooks";

import "./ImageItem.scss";

const ImageItem = ({ color, thumbnail, medium }) => {
    const {
        isCover,
        blur,
        urlThumbnail,
        urlMedium
    } = useProgressiveImage(color, thumbnail, medium);
    
    const styleCover = {
        backgroundColor: color
    };
    const styleImage = {
        filter: `blur(${blur}px)`
    };

    const url = urlMedium ? urlMedium : urlThumbnail && urlThumbnail;

    return(
        <div className="image">
            { isCover && <div className="image__cover" style={ styleCover } ></div> }
            <img src={ url } alt="image" style={ styleImage }  />
        </div>
    );
};

export default React.memo(ImageItem);