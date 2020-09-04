import React, { Fragment } from "react";

import "./Button.scss"

const Button = () => {
    return(
        <div className="button">
            <input type="file" name="files" id="files" />
            <label htmlFor="files"></label>
        </div>

    );
};

export default Button;