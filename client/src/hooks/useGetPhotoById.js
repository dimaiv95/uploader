import { useContext, useCallback } from "react";
import { PhotosAPIContext } from "../contexts";

import { getPhotoByIdRequest, getPhotoByIdSuccess, getPhotoByIdError } from "../store/actions";

import useRequest from "./useRequest";

const useGetPhotoById = (id) => {
    const { getPhotoById } = useContext(PhotosAPIContext);

    const request = useCallback(() => getPhotoById(id), [id]);

    return useRequest(request, "photo", getPhotoByIdRequest, getPhotoByIdSuccess, getPhotoByIdError);
};

export default useGetPhotoById;