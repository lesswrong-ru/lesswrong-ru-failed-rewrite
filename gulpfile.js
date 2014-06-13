var gulp = require('gulp');
var clean = require('gulp-clean');
var react = require('gulp-react');
var sass = require('gulp-sass');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');

gulp.task('clean-scripts', function (cb) {
    return gulp.src('js', {read: false})
        .pipe(clean());
});

gulp.task('clean-styles', function (cb) {
    return gulp.src('css', {read: false})
        .pipe(clean());
});

gulp.task('clean-browserify', function (cb) {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

gulp.task('clean', ['clean-scripts', 'clean-styles', 'clean-browserify']);

gulp.task('scripts', function () {
    return gulp.src('src/jsx/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('js'))
        .pipe(notify('JSX compiled'));
});

gulp.task('styles', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload({auto: false}))
        .pipe(notify('Sass compiled'));
});

gulp.task('browserify', ['scripts'], function () {
    var bundler = watchify('./js/frontend.js');

    bundler.on('update', rebundle);
    function rebundle () {
        return bundler.bundle()
        .pipe(source('frontend.js'))
        .pipe(gulp.dest('build'))
        .pipe(livereload({auto: false})) // not working for some reason
        .pipe(notify('Browserified'));
    };

    return rebundle();
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('src/jsx/**/*.jsx', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('js/*.js', ['browserify']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('styles', 'scripts', 'browserify');
});
