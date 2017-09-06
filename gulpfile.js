var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

// Compile sass
gulp.task('sass', function () {
    gulp.src('components/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        //Browser sync will watch changes and reload on save
        .pipe(browserSync.stream());

});

// Uglify Javascripts
gulp.task('compress', function () {
    return gulp.src('components/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// Watching files
gulp.task('watch', function () {
    // Define server for browser sync
    browserSync.init({
        proxy: 'http://www.custom-fe-template.loc'
        //server: ''
    });
    gulp.watch("components/scripts/*.js", ['compress']);
    gulp.watch("components/styles/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Uglify Plugins
gulp.task('uglifyPlugins', function() {
    return gulp.src(['components/vendor/bootstrap/dist/js/bootstrap.js',
      'components/vendor/jquery/dist/jquery.js', 'components/vendor/tether/dist/js/tether.js'])
      .pipe(rename({
        suffix: ".min",
        extname: ".js"
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
  });
  
  // Minify Plugins CSS files
  gulp.task('minifyPlugins', function() {
    return gulp.src(['components/vendor/bootstrap/dist/css/bootstrap.css'])
      .pipe(rename({
        suffix: ".min",
        extname: ".css"
      }))
      .pipe(minifyCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css'));
  });
  
  gulp.task('build', ['uglifyPlugins', 'minifyPlugins']);
  gulp.task('default', ['watch']);