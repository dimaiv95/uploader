import React from "react";

const UploaderContext = React.createContext(null);

const {
    Provider: UploaderProvider,
    Consumer: UploaderConsumer
} = UploaderContext;

export { UploaderContext, UploaderProvider, UploaderConsumer };