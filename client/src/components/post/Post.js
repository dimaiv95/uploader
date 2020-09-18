import React from "react";
import { Link } from "react-router-dom";

import { useProgressiveImage } from "../../hooks";

import "./Post.scss";

const Post = ({ _id, color, thumbnail, medium }) => {
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
        <div className="post">
            <Link to={ `/${ _id }` } >
                { isCover && <div className="post__cover" style={ styleCover } ></div> }
                <img src={ url } alt="image" style={ styleImage }  />
            </Link>
        </div>
    );
};

export default React.memo(Post);