import React from "react";
import { useGetAllPhotos } from "../../hooks";
import Image from "../image";

import Spiner from "../spiner";
import Empty from "../empty";

import "./Images.scss";

const ImagesView = ({ data }) => {
    return(
        <div className="images__row">
        {
            data.map(({ _id, medium }) => {
                return(
                    <div key={ _id } className="images__col">
                        <Image url={ medium.url } />
                    </div>
                )
            })
        }
        </div>
    );
};

const Images = () => {
    const { loading, data, error } = useGetAllPhotos();

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