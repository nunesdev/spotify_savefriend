var gulp = require('gulp');

gulp.task('default', ['less', 'browserify', 'images', 'vendor', 'watch', 'browser-sync']);