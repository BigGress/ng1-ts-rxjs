var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'client')
};
config.devtool = 'cheap-eval-source-map';

config.plugins = config.plugins.concat([

  new webpack.HotModuleReplacementPlugin(),

//    new webpack.DefinePlugin({
//         'process.env': {
//             BUILD_ENV: "dev-env"
//         }
//     }),
]);

module.exports = config;
