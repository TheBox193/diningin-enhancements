var browserify = require('browserify');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var zip = require('gulp-zip');

gulp.task('default', function() {
	browserify('src/diningin.tweaks.js')
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(uglify({preserveComments: "some"}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('src'));

	return gulp.src(['**', '!./node_modules/', '!./node_modules/**', '!./dist/', '!./dist/**'])
	.pipe(zip('diningin.tweaks.zip'))
	.pipe(gulp.dest('dist'));
});
