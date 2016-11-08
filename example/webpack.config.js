var webpack = require( 'webpack' ),
    config = require( 'config' );

module.exports.getConfig = function( type ) {

    var isDev = type === 'development';

    var dev = require( './webpack.dev.config' );
    var prod = require( './webpack.prod.config' );

    if( isDev ) {
        dev.entry[ 'app' ].unshift( 'webpack-dev-server/client?http://localhost:' + config.webpackDevServerPort + '/' );
        return dev;
    } else {
        return prod;
    }
};
