import React from "react";

import Image from "../image";

import "./Images.scss";

const Images = () => {
    return(
        <div className="images">
            <div className="images__row">
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
                <div className="images__col">
                    <Image />
                </div>
            </div>
        </div>
    );
};

export default Images;