import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
    postPhotoRequest,
    postPhotoProgress,
    postPhotoSuccess,
    postPhotoComplete,
    postPhotoError
} from "../store/actions";

const usePostPhoto = (request) => {
    const [ data, setData ] = useState(null);
    const dispath = useDispatch();
    const progress = (precent) => dispath(postPhotoProgress(precent));
    
    useEffect(() => {
        if(data){
            dispath(postPhotoRequest());
            
            let cancelled = false;
            
            request(data, progress)
                .then(response => {
                    if(response.status !== 201){
                        throw new Error("Failed to fetch photos");
                    }
                    !cancelled && dispath(postPhotoSuccess(response.data)) && setTimeout(() => {
                        dispath(postPhotoComplete());
                    }, 1200);
                })
                .catch(error => {
                    !cancelled && dispath(postPhotoError(error))  && setTimeout(() => {
                        dispath(postPhotoComplete());
                    }, 1200);
                });
    
            return () => cancelled = true;
        }
    }, [data, request]);

   const handleChange = ({ target }) => {
        const { files } = target;
        const file = files[0];
        const formData = new FormData();

        formData.append("files", file, file.name);
        setData(formData);
    };

    return handleChange;
};

export default usePostPhoto;