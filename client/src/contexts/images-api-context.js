import React from "react";

const ImagesAPIContext = React.createContext(null);

const {
    Provider: ImagesAPIProvider,
    Consumer: ImagesAPIConsumer
} = ImagesAPIContext;

export { ImagesAPIContext, ImagesAPIProvider, ImagesAPIConsumer };