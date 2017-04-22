'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var pug = require('gulp-pug');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Start dev server

gulp.task('server', function() {
    connect.server({
    port: 8005,
    root: 'dist',
    livereload: true
  });
});


gulp.task('compress', function() {
  return gulp.src('./js/**/*.js')
    //.pipe(uglify({
    //  preserveComments: 'license'
    //}).on('error', console.error.bind(console)))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('pug', function(){
	return gulp.src('./pug/**/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('pug/**/*.pug', ['pug']);
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['compress']);
});

gulp.task('default', [
	'pug',
	'sass',
	'compress',
	'server',
	'watch'
]);