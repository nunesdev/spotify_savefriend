var gulp 		= require('gulp');
var watch 		= require('gulp-watch');
var pkg 		= require('../../package.json');
var srcPath 	= "./src".replace(/^\.\/+/, '');//O gulp-watch requer setar o path sem o ./
var dstPath 	= "../dist";

gulp.task('watch', function() {
    gulp.watch(srcPath + '/less/**/*.less', ['less']);
    gulp.watch(srcPath + '/js/**/*.js', ['browserify']);
	// watch({glob: 'src/less/**/*.less'}, function(){
	// 	gulp.start('less');
	// });

	// watch({glob: srcPath + '/js/**/*.js'}, function(){
	// 	gulp.start('browserify');
	// });
});