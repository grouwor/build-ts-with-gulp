var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var fancyLog = require('fancy-log');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var paths = {
    pages: ['src/*.html']
};

function copyHTML() {
    return gulp.src(paths.pages).pipe(gulp.dest('dist'));
}

var watchifiedBrowserifyTS = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
}).plugin(tsify));

function bundle() {
    return watchifiedBrowserifyTS
        .bundle()
        .on("error", fancyLog)
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
}

watchifiedBrowserifyTS.on('update', bundle);
watchifiedBrowserifyTS.on('log', fancyLog);
exports.default = gulp.parallel(copyHTML, bundle);