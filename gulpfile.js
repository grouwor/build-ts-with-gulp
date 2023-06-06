var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var paths = {
    pages: ['src/*.html']
};

function copyHTML() {
    return gulp.src(paths.pages).pipe(gulp.dest('dist'));
}

function browserifyWithTS() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
}

exports.default = gulp.parallel(copyHTML, browserifyWithTS);