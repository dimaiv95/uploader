import { useContext, useCallback } from "react";
import { ImagesAPIContext } from "../contexts";

import { getAllImagesRequest, getAllImagesSuccess, getAllImagesError } from "../store/actions";

import useRequest from "./useRequest";

const useGetAllImages = () => {
    const { getAllImages } = useContext(ImagesAPIContext);

    const request = useCallback(() => getAllImages(), []);

    return useRequest(request, "images", getAllImagesRequest, getAllImagesSuccess, getAllImagesError);
};

export default useGetAllImages;