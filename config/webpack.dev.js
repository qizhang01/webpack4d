const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const portfinder = require('portfinder');
const config = require('./config');

const devWebpackConfig = merge.smart(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: 'js/[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                oneOf: []
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: config.indexPath,
            minify: {
                html5: true
            },
            hash: false
        }),

        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        ...config.devServer
    },
    stats: {
        colors: true,
        children: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        builtAt: false,
        entrypoints: false,
        assets: false,
        version: false
    }
});

module.exports = new Promise((resolve, reject) => {
    // 搜寻可用的端口号
    portfinder.basePort = config.devServer.port;
    portfinder.getPort((err, port) => {
        if (err) reject(err)
        else {
            devWebpackConfig.devServer.port = port;
        }
        resolve(devWebpackConfig)
    })
});

