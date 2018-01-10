var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var config = require('../config').scripts;

// Scripts
gulp.task('scripts', function (cb) {
	console.log("Scripts task");
	pump(
		[
			gulp.src(config.src),
			uglify(),
			gulp.dest(config.dest)
		],
		cb
	);
	browserSync.reload();
});