module.exports = (api) => {
    const env = api.env();

    if(env === "test"){
        return {
            plugins: [
                "@babel/plugin-transform-modules-commonjs"
            ]
        };
    };

    return {};
};