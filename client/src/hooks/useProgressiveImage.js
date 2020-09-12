import { useState, useEffect } from "react";

const useProgressiveImage = (color, thumbnail, medium) => {
    const [{ isCover, blur, urlThumbnail, urlMedium }, setUrl ] = useState({
        isCover: true,
        blur: 15,
        urlThumbnail: null,
        urlMedium: null
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
                    urlMedium: image.urlMedium
                };
                
            });
        });
        thumbnailImage.addEventListener("error", () => {
            setUrl({
                isCover: true,
                blur: 15,
                urlThumbnail: null,
                urlMedium: null
            });
        });
    
        const mediumImage = new Image();
        mediumImage.src = medium;
        mediumImage.addEventListener("load", () => {
            setUrl((image) => {
                return {
                    isCover: false,
                    blur: 0,
                    urlThumbnail: image.urlThumbnail,
                    urlMedium: medium
                };
            });
        });
        mediumImage.addEventListener("error", () => {
            setUrl({
                isCover: true,
                blur: 15,
                urlThumbnail: null,
                urlMedium: null
            });
        });
    
    }, [ color, thumbnail, medium ]);

    return { isCover, blur, urlThumbnail, urlMedium };
};

export default useProgressiveImage;