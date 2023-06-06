var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var fancyLog = require('fancy-log');
var terser = require('gulp-terser');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var tsify = require('tsify');
var paths = {
    pages: ['src/*.html']
};

function copyHTML() {
    return gulp.src(paths.pages).pipe(gulp.dest('dist'));
}

exports.default = gulp.parallel(copyHTML, function() {
    return browserify({
        basedir: ".",
        debug: true,
        entries: ["src/main.ts"],
        cache: {},
        packageCache: {},
      })
        .plugin(tsify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(terser())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist"));
});