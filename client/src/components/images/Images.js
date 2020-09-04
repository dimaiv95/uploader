import React, { useContext } from "react";
import { PhotosAPIContext } from "../../contexts";

import { useGetAllPhotos } from "../../hooks";

import Image from "../image";

import "./Images.scss";

const Images = () => {
    const { getAllPhotos } = useContext(PhotosAPIContext);
    const { loading, photos, error } = useGetAllPhotos(getAllPhotos);

    return(
        <div className="images">
            <div className="images__row">
            {
                loading && <div className="images__col">Loading...</div>
            }
            {
                error && <div className="images__col">Error...</div>
            }
            { 
                (!loading && !error && photos.length) && photos.map(({ _id, medium }) => {
                    return(
                        <div key={ _id } className="images__col">
                            <Image url={ medium.url } />
                        </div>
                    )
                })
            } 
            </div>
        </div>
    );
};

export default Images;