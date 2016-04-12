var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var pkg 		= require('../../package.json');
var dstPath 	= "../../../assets/js/";

gulp.task('browser-sync', function() {

	browserSync.init({
        proxy: "http://embratur.dev/"
    });

	
});