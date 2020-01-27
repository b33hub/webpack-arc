var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');

const conf = require('./config');

var config = {
    entry: './tests.js',
    output: {
        filename: './testBundle.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        fs: 'empty'
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildExit: "mocha dist/testBundle.js"
        })
    ]
};
module.exports = config;