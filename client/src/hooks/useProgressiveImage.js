import { useState, useEffect } from "react";

import useOnloadImage from "./useOnloadImage";

const useProgressiveImage = (thumbnail, small) => {
    const {
        loading: loadingThumbnail,
        data: dataThumbnail,
        error: errorThumbnail
    } = useOnloadImage(thumbnail);

    const {
        loading: loadingSmall,
        data: dataSmall,
        error: errorSmall
    } = useOnloadImage(small);

    const [{ isCover, blur }, setProgressiveImage ] = useState({
        isCover: true,
        blur: 15
    });

    useEffect(() => {

        if(
            !loadingThumbnail &&
            !loadingSmall &&
            dataThumbnail &&
            dataSmall
        ){
            setProgressiveImage({
                isCover: false,
                blur: 0
            });
        }

        if(
            !loadingThumbnail &&
            !loadingSmall &&
            errorThumbnail &&
            errorSmall
        ){
            setProgressiveImage({
                isCover: true,
                blur: 15
            });
        }

    }, [loadingThumbnail, loadingSmall]);

    return { 
        isCover,
        blur,
        urlThumbnail: dataThumbnail,
        urlSmall: dataSmall
    };
};

export default useProgressiveImage;