import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRequest = (request, dispathRequest, dispathSuccess, dispathError) => {
    const dispath = useDispatch();

    const { loading, data, error } = useSelector(({ photos }) => ({
        loading: photos.loading,
        data: photos.data,
        error: photos.error
    }));

    useEffect(() => {
        dispath(dispathRequest());
    
        let cancelled = false;
    
        request()
            .then(response => {
                if(response.status !== 200){
                    throw new Error("Failed to fetch photos");
                }
                !cancelled && dispath(dispathSuccess(response.data));
            })
            .catch(error => {
                !cancelled && dispath(dispathError(error));
            });
    
        return () => cancelled = true;
    
    }, [request, dispathRequest, dispathSuccess, dispathError]);

    return { loading, data, error };
};

export default useRequest;