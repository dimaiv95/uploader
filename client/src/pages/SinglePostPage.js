import React from "react";

import Portal from "../components/portal";
import { ModalPost } from "../components/modals";

import { useGetPostById } from "../hooks";

const SinglePostPage = ({ id }) => {
    const { loading, data, error } = useGetPostById(id);

    return(
        <Portal>
            <ModalPost id={ id } loading={ loading } data={ data } error={ error } />
        </Portal>
    );
};

export default React.memo(SinglePostPage);