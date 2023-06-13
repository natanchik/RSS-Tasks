const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {    
    entry: path.resolve(__dirname, 'migration-newip-to-ts', 'src', 'index'),
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.ts$/i, 
                use: 'ts-Loader',
                exclude: /(node_modules)/,
                include: [path.resolve(__dirname, 'migration-newip-to-ts', 'src')]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', 'json'],
    },
    output: {
        publicPath: 'dist',
        filename: 'index.js',
        path: path.resolve(__dirname, 'migration-newip-to-ts', 'dist'),
    },
    plugins: [
        new EslingPlugin({ extensions: 'ts' }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'migration-newip-to-ts', 'src', 'index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};