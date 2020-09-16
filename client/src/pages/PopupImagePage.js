import React from "react";

import Portal from "../components/portal";
import { ModalImage } from "../components/modals";

import { useGetPhotoById } from "../hooks";

const PopupImagePage = ({ id }) => {
    const { loading, data, error } = useGetPhotoById(id);

    return(
        <Portal>
            <ModalImage id={ id } loading={ loading } data={ data } error={ error } />
        </Portal>
    );
};

export default React.memo(PopupImagePage);