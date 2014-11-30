var gulp = require('gulp');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('default', function () {
    gulp.start('watch');
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.js'], ['webpack']);
    gulp.watch(['src/**/*.less'], ['less']);
});

gulp.task('clean', function () {
    gulp.src('dist/*')
        .pipe(clean());
});

gulp.task('build', ['clean'], function () {
    gulp.start(['copy', 'less', 'webpack']);
});

gulp.task('webpack', function () {
    gulp.src('src/js/app.js')
        .pipe(plumber())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
    gulp.src([
        'node_modules/material-ui/src/less/scaffolding.less',
        'node_modules/material-ui/src/less/components.less',
        'src/less/**/*.less'
    ])
        .pipe(plumber())
        .pipe(concat('app.less'))
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});