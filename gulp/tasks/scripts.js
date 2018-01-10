var gulp = require('gulp');
var pump = require('pump');

// Scripts
gulp.task('scripts', function (cb) {
	console.log("Scripts task");
	pump(
		[
			gulp.src('assets/scripts/*.js'),
			uglify(),
			gulp.dest(scriptsPath)
		],
		cb
	);
	browserSync.reload();
});