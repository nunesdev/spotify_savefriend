var gulp	= require('gulp'),
	rimraf 	= require('rimraf');



gulp.task('clean-images', function (cb) {
  rimraf('../dist/img/', cb);
});

gulp.task('images', ['clean-images', 'sprites'], function() {
	gulp.src('./src/img/*')
	.pipe(gulp.dest('../dist/img/'));
});