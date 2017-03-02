var webpack = require( 'webpack' ),
    config = require( 'config' );

module.exports.getConfig = function( type ) {

    var isDev = type === 'development';

    var dev = require( './webpack.config.dev' );
    var prod = require( './webpack.config.prod' );

    if( isDev ) {
        dev.entry[ 'app' ].unshift( 'webpack-dev-server/client?http://localhost:' + config.webpackDevServerPort + '/' );
        return dev;
    } else {
        return prod;
    }
};
