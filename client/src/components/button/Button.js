import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { PhotosAPIContext } from "../../contexts";
import {
    postPhotoRequest,
    postPhotoProgress,
    postPhotoSuccess,
    postPhotoComplete,
    postPhotoError
} from "../../store/actions";

import {
    completeVariants,
    loadingVariants,
    loadingCircleVariants,
    successVariants,
    successPathVariants,
    errorVariants
} from "./animation-settings";

import { getColorCover } from "../../utils";

import "./Button.scss";

const Button = () => {
    const { postPhoto } = useContext(PhotosAPIContext);
    const { loading, success, complete, error } = useSelector(({ upload }) => ({
        loading: upload.loading,
        success: upload.success,
        complete: upload.complete,
        error: upload.error
    }));
    const dispath = useDispatch();

    const handleChange = ({ target }) => {
        const { files } = target;
        const file = files[0];
        const formData = new FormData();
        const color  = getColorCover();

        formData.append("files", file, file.name);
        formData.append("color", color);

        const progress = (precent) => dispath(postPhotoProgress(precent));
        
        dispath(postPhotoRequest());
        
        postPhoto(formData, progress)
            .then(response => {
                if(response.status !== 201){
                    throw new Error("Failed to fetch photos");
                }
                dispath(postPhotoSuccess(response.data)) && setTimeout(() => {
                    dispath(postPhotoComplete());
                }, 1200);
            })
            .catch(error => {
                dispath(postPhotoError(error)) && setTimeout(() => {
                    dispath(postPhotoComplete());
                }, 1200);
            });
    };

    return(
        <motion.div className="button" whileHover={{ scale: 1.1 }} >
            <input type="file" name="files" id="files" onChange={ handleChange } />
            { complete && <label htmlFor="files" className="button__upload"></label> }
            <svg
                version="1.1"
                id="button__svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                viewBox="0 0 40 40"
                enableBackground="new 0 0 40 40"
                xmlSpace="preserve">
                <AnimatePresence>
                    { complete && <motion.g
                        id="upload"
                        variants={ completeVariants }
                        initial="hidden"
                        animate="visible"
                        exit="exit" >
                        <line id="upload_x5F_vertical" display="inline" fill="none" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" strokeMiterlimit="10" x1="20" y1="11" x2="20" y2="29"/>
                        <line id="upload_x5F_horizontal" display="inline" fill="none" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" strokeMiterlimit="10" x1="29" y1="20" x2="11" y2="20"/>
                    </motion.g>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    { loading && <motion.g
                        id="loading"
                        variants={ loadingVariants }
                        initial="hidden"
                        animate="visible"
                        exit="exit" >
                        <motion.g
                            variants={ loadingCircleVariants }
                            animate="repeat" >
                            <path id="loading_x5F_bottom" display="inline" fill="none" stroke="#FFFFFF" strokeWidth="3.6652" strokeLinecap="round" strokeMiterlimit="10" d="
                            M20,34c-7.7,0-14-6.3-14-14"/>
                            <path id="loading_x5F_top" display="inline" fill="none" stroke="#FFFFFF" strokeWidth="3.6652" strokeLinecap="round" strokeMiterlimit="10" d="
                            M20,6c7.7,0,14,6.3,14,14"/>
                        </motion.g>
                    </motion.g>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    { success && <motion.g
                        id="success"
                        variants={ successVariants }
                        initial="hidden"
                        animate="visible"
                        exit="exit" >
                        <motion.polyline
                            variants={ successPathVariants }
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="30.5,13 16.5,27 9.5,20 "/>
                        </motion.g>
                    }
                </AnimatePresence>
                <AnimatePresence>
                { error && <motion.g
                        variants={ errorVariants }
                        initial="hidden"
                        animate="visible"
                        id="error"
                        exit="exit" >
                        <circle id="error_x5F_circle" fill="none" stroke="#FFFFFF" strokeWidth="3.6655" strokeLinecap="round" strokeMiterlimit="10" cx="20" cy="20" r="14"/>
                        <line id="error_x5F_line" fill="none" stroke="#FFFFFF" strokeWidth="3.6655" strokeLinecap="round" strokeMiterlimit="10" x1="10.1" y1="29.9" x2="29.9" y2="10.1"/>
                    </motion.g>
                }
                </AnimatePresence>
            </svg>
        </motion.div>
    );
};

export default Button;