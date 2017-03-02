var combiner = require( 'stream-combiner2' ),
    config = require( 'config' ),
    load = require( 'gulp-load-plugins' )(),
    gulp = require( 'gulp' ),
    open = require( 'open' ),
    del = require( 'del' ),
    path = require( 'path' ),
    webpack = require( 'webpack' ),
    webpackStream = require( 'webpack-stream' ),
    WebpackDevServer = require( 'webpack-dev-server' ),
    devConfig = Object.create( require( './webpack.config.js' ).getConfig( 'development' ) ),
    prodConfig = Object.create( require( './webpack.config.js' ).getConfig() ),
    relPath = ( myPath ) => { return path.join(  __dirname, myPath ) };

gulp.task( 'browser', function() {
    return open( 'http://localhost:' + config.webpackDevServerPort);
});

gulp.task( 'webpack-dev-server', function() {

    new WebpackDevServer( webpack( devConfig ), {
        contentBase: relPath( config.wdsContentBasePath ),
        publicPath: config.publicPath,
        stats: {
            colors: true,
            assets: false,
            chunkModules: false,
            hash: false,
            timings: false,
            version: false
        },
        watchOptions: {
            aggregateTimeout: 100
        }

    }).listen( config.webpackDevServerPort, 'localhost' );
});

gulp.task( 'prod:clean', function() {
        del([
            relPath( config.buildPath, '**/*' )
        ]);
    }
);

gulp.task( 'prod:webpack', function() {
    var combined = combiner.obj([
        gulp.src( './src/app.js' ),
        webpackStream( prodConfig, webpack ),
        gulp.dest( relPath ( config.buildPath ) )
    ]);

    combined.on( 'error', console.error.bind( console ) );

    return combined;
});

gulp.task( 'default', load.sequence( 'webpack-dev-server', 'browser' ) );
gulp.task( 'prod', load.sequence( 'prod:clean', 'prod:webpack' ) );
