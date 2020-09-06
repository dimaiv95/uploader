import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { postPhotoRequest, postPhotoSuccess, postPhotoComplete, postPhotoError } from "../store/actions";

const usePostPhoto = (request) => {
    const dispath = useDispatch();

    return useCallback((data) => {
        dispath(postPhotoRequest());

        let cancelled = false;
        
        request(data)
            .then(response => {
                if(response.status !== 201){
                    throw new Error("Failed to fetch photos");
                }
                !cancelled && dispath(postPhotoSuccess(response.data)) && setTimeout(() => {
                    dispath(postPhotoComplete());
                }, 1200);
            })
            .catch(error => {
                !cancelled && dispath(postPhotoError(error));
            });

        return () => cancelled = true;

    }, [request]);
};

export default usePostPhoto;