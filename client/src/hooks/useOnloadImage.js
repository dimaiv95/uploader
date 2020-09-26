import { useState, useCallback, useEffect } from "react";

const useOnloadImage = (url) => {
    const [ image, setImage ] = useState({
        loading: true,
        error: false,
        data: null,
    });

    const handleLoad = useCallback(() => {
        setImage({
            loading: false,
            error: false,
            data: url,
        });
    }, [url]);

    const handleError = useCallback(() => {
        setImage({
            loading: false,
            error: true,
            data: null,
        });
    }, [url]);

    useEffect(() => {

        const imageObj = new Image();
        imageObj.src = url;
        imageObj.addEventListener("load", handleLoad);
        imageObj.addEventListener("error", handleError);

        return () => {
            imageObj.removeEventListener("load", handleLoad);
            imageObj.removeEventListener("error", handleError);
        };

    }, [handleLoad, handleError]);

    return image;
};

export default useOnloadImage;