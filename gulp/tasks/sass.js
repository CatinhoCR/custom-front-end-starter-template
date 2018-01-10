var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
// This should create it everytime?
var browserSync = require('browser-sync');
var config = require('../config').sass;

// Styles
gulp.task('sass', function() {
	gulp.src(config.src)
		.pipe(plumber(function(err){
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.stream());
		//Browser sync will watch changes and reload on save
	//.pipe(browserSync.stream());
	// browserSync.reload();
});
// .pipe(concat('styles.css'))
// .pipe(minifyCss())