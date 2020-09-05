import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { getRequest, postPhotoSuccess, postPhotoError } from "../store/actions";

const usePostPhoto = (request) => {
    const dispath = useDispatch();

    return useCallback((data) => {
        dispath(getRequest());

        let cancelled = false;

        request(data)
            .then(response => {
                if(response.status !== 201){
                    throw new Error("Failed to fetch photos");
                }
                !cancelled && dispath(postPhotoSuccess(response.data));
            })
            .catch(error => {
                !cancelled && dispath(postPhotoError(error));
            });

        return () => cancelled = true;

    }, [request]);
};

export default usePostPhoto;