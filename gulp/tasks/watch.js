var gulp        = require('gulp');
var browserSync = require('browser-sync');


// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch(["./*.html", "./templates/*.html"]).on('change', browserSync.reload);
});


