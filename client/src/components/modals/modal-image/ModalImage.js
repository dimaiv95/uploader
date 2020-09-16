import React from "react";

import Spiner from "../../spiner";
import Empty from "../../empty";
import "./ModalImage.scss";

const ModalImageView = React.memo(({ data }) => {
    return(
        <img src={ data.image.small.url } />
    );
});

const ModalImage = ({ id, loading, data, error }) => {
    
    const hasData = (!loading && !error);

    const errorComponent = error ? <Empty /> : null;
    const loadingComponent = loading ? <Spiner /> : null;
    const emptyComponent = hasData && !data ? <Empty /> : null;
    const dataComponent = hasData && data ? <ModalImageView data={ data } /> : null;

    return(
        <div className="modal-image">
            <div className="modal-image__content">
                { loadingComponent }
                { errorComponent }
                { emptyComponent }
                { dataComponent }
            </div>
            <div className="modal-image__cover"></div>
        </div>
    );
};

export default ModalImage;