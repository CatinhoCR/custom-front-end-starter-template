// Require Inner Gulp Tasks
// const path = require('path');
// const gulp = require('gulp');
// const requireDir = require('require-dir');

// Require all tasks in gulpfile.js/tasks, including subfolders
// requireDir('./gulp/tasks', { recurse: true });


/*
    Modularize this shit
*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pump = require('pump');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');

// Paths
var assetsPath = "./assets";
var publicPath = "./public";
var stylesPath = "/styles/styles.scss";
var scriptsPath = "/scripts/*.js";

// HTML
gulp.task('html', function () {
    return gulp.src("*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(publicPath));
});

// Styles
gulp.task('sass', function () {
    console.log(assetsPath + stylesPath);
    gulp.src(assetsPath + stylesPath)
        .pipe(plumber(function (err) {
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())

        .pipe(gulp.dest(publicPath + "/styles"))
        .pipe(browserSync.stream());
    //Browser sync will watch changes and reload on save
    //.pipe(browserSync.stream());
    // browserSync.reload();
});


// Scripts
gulp.task('scripts', function (cb) {
    console.log(assetsPath + scriptsPath);
    pump(
        [
            gulp.src(assetsPath + scriptsPath),
            uglify(),
            gulp.dest(publicPath + "/js")
        ],
        cb
    );
    browserSync.reload();
});

// Images
gulp.task('images', function () {
	console.log("Images task");
});

// Watching files
gulp.task('watch', function () {
    // Define server for browser sync * proxy: 'http://www.custom-fe-template.loc'

    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch(assetsPath + scriptsPath, ['scripts']);
    gulp.watch(assetsPath + "/styles/**/*.scss", ['sass']);
    gulp.watch("*.html", ['html']);
    
    gulp.watch("*.html").on('change', browserSync.reload);
});

// gulp.task('build', ['uglifyPlugins', 'minifyPlugins']);
gulp.task('default', ['watch']);