const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { triggerAsyncId } = require("async_hooks");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";

module.exports = {
    mode,
    entry: ["@babel/polyfill", "./src/index.js"],
    devServer: {
        static: "./dist",
        port: 4200,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Weather App",
            favicon: "./src/weather-app.png",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.[contenthash].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },

    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};
