import React from "react";

import Portal from "../components/portal";
import { ModalImage } from "../components/modals";

import { useGetImageById } from "../hooks";

const PopupImagePage = ({ id }) => {
    const { loading, data, error } = useGetImageById(id);

    return(
        <Portal>
            <ModalImage id={ id } loading={ loading } data={ data } error={ error } />
        </Portal>
    );
};

export default React.memo(PopupImagePage);