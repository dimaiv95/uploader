const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env = {}) => {
    const { mode = "development" } = env;

    const isDev = mode === "development";
    const isProd = mode === "production";

    const getStyleLoader = () => {
        return isProd ? MiniCssExtractPlugin.loader : isDev && "style-loader";
    };

    return {
        context: path.resolve(__dirname, "client"),
        mode: isProd ? "production" : isDev && "development",
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "client", "build"),
            filename:  "js/[name].[hash:8].bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [getStyleLoader(), "css-loader", "sass-loader"]
                },
                {
                    test: /.(jpg|png|gif|svg)/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash:8].[ext]",
                            outputPath: "images"
                        }
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "client", "/public/index.html")
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[hash:8].css"
            }),
            new CleanWebpackPlugin()
        ],
        devServer: {
            contentBase: path.resolve("client", "build"),
            port: 3000,
            proxy: {
                "/api": {
                    target: "http://localhost:5000",
                    secure: false,
                    changeOrigin: true
                },
                "/images": {
                    target: "http://localhost:5000",
                    secure: false,
                    changeOrigin: true
                }
            }
        }
    };
};