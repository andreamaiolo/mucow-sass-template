const del = require('del');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('html', function() {
  return gulp.src('src/**/*.html').pipe(htmlmin({
    collapseWhitespace: true
  })).pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
  return gulp.src('src/**/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('src/**/*.scss').pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError)).pipe(autoprefixer()).pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['default']);
});

gulp.task('build', ['html', 'javascript', 'sass'], function() {
  return gulp.src('src/**/*.mucow').pipe(fileInclude({
    basepath: 'dist'
  })).pipe(gulp.dest('dist'));
});

gulp.task('default', ['build'], function() {
  del(['dist/**/*.{html,css,js}', '!dist']);
});