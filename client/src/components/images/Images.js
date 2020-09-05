import React, { useContext } from "react";
import { PhotosAPIContext } from "../../contexts";

import { useGetAllPhotos } from "../../hooks";

import Image from "../image";

import "./Images.scss";

const Images = () => {
    const { getAllPhotos } = useContext(PhotosAPIContext);
    const { loading, photos, error } = useGetAllPhotos(getAllPhotos);

    if(loading && !photos.length){
        return(
            <div className="images__col">Loading...</div>
        );
    }
    
    if(error){
        return(
            <div className="images__col">Error...</div>
        );
    }

    if(photos.length){
        return(
            photos.map(({ _id, medium }) => {
                return(
                    <div key={ _id } className="images__col">
                        <Image url={ medium.url } />
                    </div>
                )
            })
        );
    }
};

export default Images;