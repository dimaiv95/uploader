import React from "react";

import { useGetAllPhotos } from "../../hooks";

import Image from "../image";

import "./Images.scss";

const Images = () => {
    const { loading, data, error } = useGetAllPhotos();

    if(!data.length){
        return(
            <div className="images__col">Empty...</div>
        );
    }

    if(loading && !data.length){
        return(
            <div className="images__col">Loading...</div>
        );
    }
    
    if(error){
        return(
            <div className="images__col">Error...</div>
        );
    }

    if(data.length){
        return(
            data.map(({ _id, medium }) => {
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