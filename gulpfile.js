let gulp = require('gulp');
let stylus = require('gulp-stylus');
let browserSync = require('browser-sync').create();
let useref = require('gulp-useref');
let gulpIf = require('gulp-if');
let imagemin = require('gulp-imagemin');
let cache = require('gulp-cache');
let del = require('del');
let runSequence = require('run-sequence');
let htmlmin = require('gulp-htmlmin');
let minifyCSS = require('gulp-minify-css');

// Tareas para el desarrollo
// Get one .styl file and render 
gulp.task('stylus', function () {
  return gulp.src('app/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  })
});

gulp.task('watch', ['browserSync', 'stylus'], () => {
  //gulp.watch('app/stylus/*.styl', ['stylus']);
  gulp.watch('public/*.html', browserSync.reload);
  gulp.watch('public/**/*.js', browserSync.reload);
});

gulp.task('default', (callback) => {
  runSequence(['browserSync', 'watch'],
    callback)
});

// 

// Tareas para el deploy

gulp.task('useref', () => {
  return gulp.src('app/**/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', minify({
      mangle: false
    })))
    .pipe(gulpIf('*.css', minifyCSS()))
    .pipe(gulpIf('*.html', htmlmin({
      collapseWhitespace: true
    })))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
  return gulp.src('app/imagenes/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/imagenes'))
});

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean', () => {
  return del.sync('dist');
});

gulp.task('build', (callback) => {
  runSequence('clean', 'stylus' ['useref', 'images', 'fonts'],
    callback)
});