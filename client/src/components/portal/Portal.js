import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, parent, className }) => {
    const el = useMemo(() => document.createElement("div"));

    useEffect(() => {
        const target = parent && parent.appendChild ? parent : document.body;

        const classList = ["portal"];

        if(className){
            className.split(" ").forEach(c => {
                classList.push(c);
            });
        }

        classList.forEach(c => el.classList.add(c));

        target.appendChild(el);

        return () => {
            target.removeChild(el);
        }

    }, [ el, parent, className ]);

    return ReactDOM.createPortal(children, el)
};

export default Portal;