import { useContext, useCallback } from "react";
import { PhotosAPIContext } from "../contexts";

import { getAllPhotosRequest, getAllPhotosSuccess, getAllPhotosError } from "../store/actions";

import useRequest from "./useRequest";

const useGetAllPhotos = () => {
    const { getAllPhotos } = useContext(PhotosAPIContext);

    const request = useCallback(() => getAllPhotos(), []);

    return useRequest(request, "photos", getAllPhotosRequest, getAllPhotosSuccess, getAllPhotosError);
};

export default useGetAllPhotos;