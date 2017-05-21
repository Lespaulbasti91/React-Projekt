const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:[
        path.resolve(__dirname, 'src/index.jsx')
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}