import React from "react";

import Spiner from "../../spiner";
import Empty from "../../empty";
import "./ModalPost.scss";

const ModalPostView = React.memo(({ data }) => {
    return(
        <img src={ data.image.small.url } />
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