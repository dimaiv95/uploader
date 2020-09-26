import React, { Fragment } from "react";

import { useOnloadImage } from "../../../hooks";
import Spiner from "../../spiner";
import Empty from "../../empty";

import "./ModalPost.scss";

const ModalPostView = React.memo(({ data }) => {
    const {
        loading: loadingImage,
        data: dataImage,
        error: errorImage
    } = useOnloadImage(data.image.medium.url);

    const hasData = (!loadingImage && !errorImage);

    const errorComponent = errorImage ? <Empty /> : null;
    const emptyComponent = hasData && !dataImage ? <Empty /> : null;
    const dataComponent = hasData && dataImage ? <img src={ data.image.medium.url } /> : null;

    return(
        <Fragment>
            { errorComponent }
            { emptyComponent }
            { dataComponent }
        </Fragment>
    );
});

const ModalPost = ({ id, loading, data, error }) => {
    
    const hasData = (!loading && !error);

    const errorComponent = error ? <Empty /> : null;
    const loadingComponent = loading ? <Spiner /> : null;
    const emptyComponent = hasData && !data ? <Empty /> : null;
    const dataComponent = hasData && data ? <ModalPostView data={ data } /> : null;

    return(
        <div className="modal-post">
            <div className="modal-post__content">
                { loadingComponent }
                { errorComponent }
                { emptyComponent }
                { dataComponent }
            </div>
            <div className="modal-post__cover"></div>
        </div>
    );
};

export default ModalPost;