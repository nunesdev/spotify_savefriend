var gulp 		= require('gulp');
var path 		= require('path');
var pkg 		= require('../../package.json');
var srcPath 		= "./src";
var bowerPath 	= path.resolve( srcPath, './bower_components' );

var dstPath 		= "./dist/css/";

gulp.task('vendor-assets', function() {
	gulp.src([bowerPath + '/bootstrap/dist/fonts/**'])
	.pipe(gulp.dest(dstPath + '/fonts'));

	gulp.src([srcPath + '/img/**'])
	.pipe(gulp.dest(dstPath + '/img'));
});