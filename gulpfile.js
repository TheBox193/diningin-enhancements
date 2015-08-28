var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var zip = require('gulp-zip');

gulp.task('default', function() {
	gulp.src('src/diningin.enhancments.js')
	.pipe(uglify({preserveComments: "some"}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('src'));

	return gulp.src(['*', '!./dist/', '!./dist/**'])
    .pipe(zip('diningin.enhancments.zip'))
	.pipe(gulp.dest('dist'));
});