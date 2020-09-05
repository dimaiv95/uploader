import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRequest, getAllPhotosSuccess, getAllPhotosError } from "../store/actions";

const useGetAllPhotos = (request) => {
    const dispath = useDispatch();

    const loading = useSelector(state => state.loading);
    const photos = useSelector(state => state.photos);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispath(getRequest());

        let cancelled = false;

        request()
            .then(response => {
                if(response.status !== 200){
                    throw new Error("Failed to fetch photos");
                }
                !cancelled && dispath(getAllPhotosSuccess(response.data));
            })
            .catch(error => {
                !cancelled && dispath(getAllPhotosError(error));
            });

        return () => cancelled = true;

    }, [request]);

    return { loading, photos, error };
};

export default useGetAllPhotos;