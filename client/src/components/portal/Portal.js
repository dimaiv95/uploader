import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
    const popup = useMemo(() => document.getElementById("popup"));

    useEffect(() => {
        popup.classList.add("popup--open");

        return () => popup.classList.remove("popup--open");
    }, [ popup ]);

    return ReactDOM.createPortal(children, popup)
};

export default Portal;