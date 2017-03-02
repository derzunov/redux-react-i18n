// DEVELOPMENT CONFIG

var config = require( 'config' ),
    webpack = require( 'webpack' ),
    path = require( 'path' );

module.exports = {

    context: __dirname,

    entry: {
        'app': [ './src/app.js' ]
    },

    output: {
        path: path.join( __dirname, config.buildPath ),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                test: /\.js$/
            }
        ]
    }
};