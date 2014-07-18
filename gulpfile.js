var gulp = require('gulp');
var clean = require('gulp-clean');
var react = require('gulp-react');
var sass = require('gulp-sass');
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

gulp.task('clean', [
    'clean-scripts',
    'clean-styles'
]);

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

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('src/jsx/**/*.jsx', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('styles', 'scripts');
});
