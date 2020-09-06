import React from "react";
import { Provider } from "react-redux"

import PhotosAPI from "./service/PhotosAPI";
import { PhotosAPIProvider, UploaderProvider } from "./contexts";

import store from "./store";

import Button from "./components/button";
import Progress from "./components/progress";
import Images from "./components/images";

import "./App.scss";

const photosAPI = new PhotosAPI();

const App = () => {
    return (
        <Provider store={ store }>
            <PhotosAPIProvider value={ photosAPI }>
                <div className="uploader">
                    <div className="uploader__content">
                        <Button />
                    </div>
                    <div className="uploader__content">
                        <Progress />
                    </div>
                    <div className="uploader__content">
                        <div className="images">
                            <div className="images__row">
                                <Images />
                            </div>
                        </div>
                    </div>
                </div>
            </PhotosAPIProvider>
        </Provider>
    );
};

export default App; 