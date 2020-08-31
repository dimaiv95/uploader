import React from "react";

import "./Progress.scss"

const Progress = ({ percent }) => {
    return(
        <div className="progress">
            <div className="progress__meter" style={{ width: `${percent}%` }}></div>
            <div className="progress__line"></div>
        </div>
    );
};

export default Progress;