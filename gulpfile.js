var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function () {
  return browserify('./app/app.js')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./app/public/build/'));
});

gulp.task('watch', function () {
  gulp.watch('./app/**/*.js', ['browserify']);
});

gulp.task('build', ['browserify']);

gulp.task('default', ['watch', 'browserify']);
