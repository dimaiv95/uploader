import React from "react";
import { useGetAllImages } from "../../hooks";
import ImageItem from "../image-item";

import Spiner from "../spiner";
import Empty from "../empty";

import "./Images.scss";

const ImagesView = ({ data }) => {
    return(
        <div className="images__row">
        {
            data.map(({ _id, image: { thumbnail, medium }, color }) => {
                const photo = {
                    _id,
                    color,
                    thumbnail: thumbnail.url,
                    medium: medium.url
                };

                return(
                    <div key={ _id } className="images__col">
                        <ImageItem { ...photo } />
                    </div>
                );
            })
        }
        </div>
    );
};

const Images = () => {
    const { loading, data, error } = useGetAllImages();

    const hasData = (!loading && !error);

    const errorComponent = error ? <Empty /> : null;
    const loadingComponent = loading ? <Spiner /> : null;
    const emptyComponent = hasData && !data.length ? <Empty /> : null;
    const dataComponent = hasData && data.length ? <ImagesView data={ data } /> : null;

    return(
        <div className="images">
            <div className="images__content">
                { loadingComponent }
                { errorComponent }
                { emptyComponent }
                { dataComponent }
            </div>
        </div>
    );
};

export default Images;