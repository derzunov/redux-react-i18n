// PRODUCTION CONFIG

var config = require( 'config' ),
    webpack = require( 'webpack' );

module.exports = {

    context: __dirname,

    entry: {
        'app': './src/app.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/
            }
        ]
    }
};