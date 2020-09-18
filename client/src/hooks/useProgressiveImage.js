import { useState, useEffect } from "react";

const useProgressiveImage = (color, thumbnail, small) => {
    const [{ isCover, blur, urlThumbnail, urlSmall }, setUrl ] = useState({
        isCover: true,
        blur: 15,
        urlThumbnail: null,
        urlSmall: null
    });

    useEffect(() => {
        const thumbnailImage = new Image();
        thumbnailImage.src = thumbnail;
        thumbnailImage.addEventListener("load", () => {
            setUrl((image) => {
                return {
                    isCover: false,
                    blur: 0,
                    urlThumbnail: thumbnail,
                    urlSmall: image.urlSmall
                };
                
            });
        });
        thumbnailImage.addEventListener("error", () => {
            setUrl({
                isCover: true,
                blur: 15,
                urlThumbnail: null,
                urlSmall: null
            });
        });
    
        const smallImage = new Image();
        smallImage.src = small;
        smallImage.addEventListener("load", () => {
            setUrl((image) => {
                return {
                    isCover: false,
                    blur: 0,
                    urlThumbnail: image.urlThumbnail,
                    urlSmall: small
                };
            });
        });
        smallImage.addEventListener("error", () => {
            setUrl({
                isCover: true,
                blur: 15,
                urlThumbnail: null,
                urlSmall: null
            });
        });
    
    }, [ color, thumbnail, small ]);

    return { isCover, blur, urlThumbnail, urlSmall };
};

export default useProgressiveImage;