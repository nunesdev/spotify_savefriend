var gulp 		= require('gulp');
var path 		= require('path');
var uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var pkg 		= require('../../package.json');
var srcPath 		= "./src";
var bowerPath 	= path.resolve( 'bower_components' );

var dstPath 		= "../dist";

gulp.task('vendor-scripts', function() {
	gulp.src([
	         bowerPath + '/jquery/dist/jquery.js',
             bowerPath + '/modernizr/modernizr.js',
             bowerPath + '/slick-carousel/slick/slick.min.js', 
             bowerPath + '/isotope/dist/isotope.pkgd.min.js', 
	         // bowerPath + '/jquery.validation/dist/jquery.validate.js',
	         // bowerPath + '/jquery.validation/dist/additional-methods.js',
	])
	.pipe(uglify())
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest(dstPath + '/js'));
});