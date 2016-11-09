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
        loaders: [
            {
                exclude: /( node_modules|bower_components )/,
                loader: 'babel',
                test: /\.js$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.ProvidePlugin(
            {
                _: 'underscore'
            }
        )
    ]
};