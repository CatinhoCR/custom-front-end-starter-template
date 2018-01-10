var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var config = require('../config').html;

gulp.task('html', function() {
    return gulp.src(config.src)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(config.dest));
  });