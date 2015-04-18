'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;
var templateCache = require('gulp-angular-templatecache');

var files = [
  paths.app + '/**/*.html',
  '!' + paths.app + '/index.html',
  '!' + paths.app + '/404.html'
];

function copyHtml() {
  gulp.src([paths.app + '/index.html', paths.app + '/404.html'])
    .pipe(gulp.dest(paths.dist));
}

gulp.task('templates', [], function(done) {
  copyHtml();
  return gulp.src(files)
      .pipe(templateCache())
      .pipe(gulp.dest(paths.dist + '/js'));
});

gulp.task('templates:prod', [], function(done) {
  copyHtml();
  return gulp.src(files)
      .pipe(templateCache())
      .pipe(plugins.uglify())
      .pipe(gulp.dest(paths.dist + '/js'));
});
