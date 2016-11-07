var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require("precss");
var autoprefix = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var imageInliner = require('postcss-image-inliner');
const config = require("./config/config.js");

var opts = {
    assetPaths: [], // List of directories where the inliner should look for assets
    maxFileSize: 10240 // Sets a max file size (in bytes)
}

module.exports = {
    entry: {
        "vendor": "./client/app/vendor.browser.ts",
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".scss", ".css", ".html"]
    },
    module: {
        preloaders: [{
            test: /\.ts/,
            loader: "tslint"
        }],
        loaders: [{
            test: /\.ts/,
            exclude: [/node_modules/],
            loader: 'ng-annotate!awesome-typescript-loader'
        }, {
            test: /\.js$/,
            exclude: [/app\/lib/, /node_modules/],
            loader: 'ng-annotate!babel'
        }, {
            test: /\.html$/,
            loader: 'html?interpolate'
        }, {
            test: /\.scss$/,
            loader: "style!css?sourceMap!postcss!sass"
        }, {
            test: /\.less$/,
            loader: 'style!css!postcss!less'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jade$/,
            loader: 'jade-loader'
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.DefinePlugin({
            'process.env': config
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // console.log("这里",module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1)
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
            }
        })
    ],
    postcss: function () {
        return [autoprefix, imageInliner(opts), precss]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/]
    }
};
