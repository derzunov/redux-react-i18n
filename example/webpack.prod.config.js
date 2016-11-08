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
                test: /\.js$/,
                query: {
                    presets: [ 'es2015', 'es2016', 'stage-0', 'react' ]
                }
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