const webpack = require('webpack');
const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = require('./config');

module.exports = new WebpackConfig()
  .extend('config/webpack.base.config.js')
  .merge({
    entry: { // add entry points for HMR
      app: [`webpack-dev-server/client?http://localhost:${conf.servePort}/`, 'webpack/hot/dev-server']
    },
    devtool: 'inline-source-map', // make sure source maps are created
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // enable hot module replacement
      new webpack.NamedModulesPlugin(), // add names to modules
      new ExtractTextPlugin({ // no need for separate css files in dev
        disable: true
      })
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  });