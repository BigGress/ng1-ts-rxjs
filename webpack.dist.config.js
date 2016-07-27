var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};

config.module.loaders.find(el=>el.loader==="style!css?sourceMap!postcss!sass")
.loader = ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap')

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),
  //单独打包css
  new ExtractTextPlugin("styles.css"),
  //单独打包css
  // new ExtractTextPlugin("styles.css"),
  new CopyWebpackPlugin([{
    from:"client/assets",
    to:"assets"
  }])
]);

module.exports = config;
