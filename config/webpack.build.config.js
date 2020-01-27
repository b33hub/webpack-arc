const webpack = require('webpack');
const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const conf = require('./config');

module.exports = new WebpackConfig()
  .extend('config/webpack.base.config.js')
  .merge({
    output: {
      path: conf.absolutePath(conf.paths.dist),
      filename: '[name]-[hash].js'
    },
    plugins: [
      new ExtractTextPlugin('app-[hash].css'),
      new WebpackCleanupPlugin(),
      //new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ],
    optimization: {
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
      ]
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  });