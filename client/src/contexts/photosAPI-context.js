import React from "react";

const PhotosAPIContext = React.createContext(null);

const {
    Provider: PhotosAPIProvider,
    Consumer: PhotosAPIConsumer
} = PhotosAPIContext;

export { PhotosAPIContext, PhotosAPIProvider, PhotosAPIConsumer };