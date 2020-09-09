import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPhotosRequest, getAllPhotosSuccess, getAllPhotosError } from "../store/actions";

const useGetAllPhotos = (request) => {
    const dispath = useDispatch();

    const { loading, data, error } = useSelector(({ photos }) => ({
        loading: photos.loading,
        data: photos.data,
        error: photos.error
    }));

    useEffect(() => {
        dispath(getAllPhotosRequest());

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

    return { loading, data, error };
};

export default useGetAllPhotos;