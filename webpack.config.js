const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            // for creating styles in the head of the
            // html document
            // {
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/
            // }]
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/

            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;