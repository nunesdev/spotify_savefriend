var gulp 			= require('gulp');
var less 			= require('gulp-less');
var autoprefixer 	= require('gulp-autoprefixer');
var handleErrors 	= require('../util/handleErrors');
var pkg 			= require('../../package.json');
var srcPath 		= "./src";
var dstPath 		= "../dist";  

gulp.task('less', function() {
	return gulp.src( srcPath + '/less/main.less')
	.pipe(less({
		paths: ['../../bower_components'],
		sourceMap: true, 
		outputSourceFiles: true
	}))
	.on('error', handleErrors)
	.pipe(autoprefixer('last 2 versions', 'Explorer >= 7'))
	.pipe(gulp.dest( dstPath + '/css'));
});