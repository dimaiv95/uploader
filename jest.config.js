module.exports = {
    setupFiles: ["<rootDir>/enzyme.config.js"],
    moduleFileExtensions: ["js", "jsx"],
    collectCoverageFrom: ["**/*.js"],
    coverageReporters: ["html"],
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js"
    },
    moduleFileExtensions: ["js", "jsx", "json"],
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    snapshotSerializers: ["enzyme-to-json/serializer"]
};