//
// Dependencies
//
var gulp = require('gulp');
var scss = require('./gulp/scss');
var scripts = require('./gulp/scripts');

//
// Asset compilation
//
var compile = function() {
    scss();
    scripts();
};

//
// Tasks
//
gulp.task('default', function() {
    compile();
    gulp.watch('./assets/scss/**/*', ['scss']);
});

gulp.task('scss', scss);
gulp.task('scripts', scripts);
gulp.task('compile', compile);
