import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PhotosAPI from "./service/PhotosAPI";
import { PhotosAPIProvider } from "./contexts";

import store from "./store";

import Button from "./components/button";
import Progress from "./components/progress";
import { HomePage, NotFoundPage, PopupImagePage } from "./pages";

import "./App.scss";

const photosAPI = new PhotosAPI();

const App = () => {
    return (
        <Provider store={ store }>
            <PhotosAPIProvider value={ photosAPI }>
                <Router>
                    <div className="uploader">
                        <div className="uploader__panel">
                            <Button />
                        </div>
                        <div className="uploader__panel">
                            <Progress />
                        </div>
                        <div className="uploader__content">
                            <Switch>
                                <Route path="/:id?" exact component={ HomePage } />
                                <Route component={ NotFoundPage } />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </PhotosAPIProvider>
        </Provider>
    );
};

export default App; 