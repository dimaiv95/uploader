const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    context: path.resolve(__dirname, "server"),
    mode: "production",
    target: "node",
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname),
        filename:  "./index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    externals: [nodeExternals()],
    node: {
        __dirname: false
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "server", "images"),
                    to: path.join(__dirname, "images")
                },
                {
                    from: path.join(__dirname, "client", "build"),
                    to: path.join(__dirname, "build")
                }
            ]
        })
    ]
}