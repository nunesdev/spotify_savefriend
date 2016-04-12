var gulp     = require('gulp'),
	spritesmith = require('gulp.spritesmith');

	gulp.task('sprites', function() {
		var spriteData = gulp.src('./src/img/sprites/*.png').pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.less', 
			imgPath: '../img/sprite.png',
			cssFormat: 'less',
			algorithm: 'binary-tree'
		}))

		spriteData.img.pipe(gulp.dest('../dist/img/'));
		spriteData.css.pipe(gulp.dest('./src/less/base/')); 
	});