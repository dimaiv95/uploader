import React from "react";

import Button from "./components/button";
import Progress from "./components/progress";
import Images from "./components/images";

import "./App.scss";

const App = () => {
    return (
        <div class="uploader">
            <div className="uploader__content">
                <Button />
            </div>
            <div className="uploader__content">
                <Progress percent={60} />
            </div>
            <div className="uploader__content">
                <Images />
            </div>
        </div>
    );
};

export default App; 