var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require("precss");
var autoprefix = require("autoprefixer");

module.exports = {
  devtool: 'sourcemap',
  entry: {
    "vendor":"./client/app/vendor.browser.ts"
  },

  module: {
    loaders: [
       { test: /\.ts/, exclude:[/node_modules/], loader:'ng-annotate!ts'},
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.scss$/, loader: 'style!css!postcss!sass' },
       { test: /\.less$/, loader: 'style!css!postcss!less' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // console.log("这里",module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1)
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ],
  postcss:function(){
      return [autoprefix,precss]
  }
};
