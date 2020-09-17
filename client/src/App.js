import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ImagesAPIService from "./service";
import { ImagesAPIProvider } from "./contexts";

import store from "./store";

import Button from "./components/button";
import Progress from "./components/progress";
import { HomePage, NotFoundPage } from "./pages";

import "./App.scss";

const imagesAPIService = new ImagesAPIService();

const App = () => {
    return (
        <Provider store={ store }>
            <ImagesAPIProvider value={ imagesAPIService }>
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
            </ImagesAPIProvider>
        </Provider>
    );
};

export default App; 