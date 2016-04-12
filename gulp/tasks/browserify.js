var gulp 			= require('gulp');
var streamify 		= require('gulp-streamify')
var browserify 		= require('browserify');
var uglify 			= require('gulp-uglify');
var handleErrors 	= require('../util/handleErrors');
var source 			= require('vinyl-source-stream');
var pkg 			= require('../../package.json');
var srcPath 		= "./src";
var dstPath 		= "../dist"; 

gulp.task('browserify', function(){
	return browserify(srcPath + '/js/main.js')
	.bundle()
	.on('error', handleErrors)
	.pipe(source('main.js'))
    .pipe(streamify(uglify()))
	.pipe(gulp.dest(dstPath + '/js'));
});