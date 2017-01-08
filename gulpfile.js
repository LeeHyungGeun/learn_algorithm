var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins');
var gutil = require('gulp-util');

var configs = {
    webpack: {
        dev: require('./configs/webpack.config.dev.js'),
        prod: require('./configs/webpack.config.prod.js')
    },
    bs: require('./configs/bs.config.js'),
    host: require('./configs/host.config.js')
};

gulp.task('prod', prod);
gulp.task('dev', dev);
gulp.task('default', dev);

function dev() {
    new WebpackDevServer(webpack(configs.webpack.dev), configs.webpack.dev.devServer)
    .listen(configs.host.webpack.port, configs.host.webpack.host, function(err) {
        if (err) {
            throw new $.util.PluginError('webpack-dev-server', err);
        }
        else {
            // TODO
            gutil.log('[webpack-dev-server]', 'http://' + configs.host.webpack.host + ':' + configs.host.webpack.port + '/webpack-dev-server');
            server();
        }
    
    });
}
function prod(callback) {
    webpack(configs.webpack.prod, function(err, stats) {
        if (err) {
            throw new $.util.PluginError('webpack', err);
            $.util.log('[webpack]', stats.toString({
                // output options
            }));
            callback();
        }
    })
}

function server() {
    browserSync(configs.bs);
}