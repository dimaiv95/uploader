import { useContext, useCallback } from "react";
import { ImagesAPIContext } from "../contexts";

import { getImageByIdRequest, getImageByIdSuccess, getImageByIdError } from "../store/actions";

import useRequest from "./useRequest";

const useGetImageById = (id) => {
    const { getImageById } = useContext(ImagesAPIContext);

    const request = useCallback(() => getImageById(id), [id]);

    return useRequest(request, "image", getImageByIdRequest, getImageByIdSuccess, getImageByIdError);
};

export default useGetImageById;