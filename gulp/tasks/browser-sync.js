var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var pkg 		= require('../../package.json');
var dstPath 	= "../../../dist/js/";

gulp.task('browser-sync', function() {

	browserSync.init({
        proxy: "http://local.savefriend/"
    });

	
});