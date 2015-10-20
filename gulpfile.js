var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  camelize: true
});

var config = {
  source: {
    scripts: {
      path: 'app/',
      files: './app/**/*.js'
    },
    markup: {
      path: 'app/',
      files: './app/**/*.html'
    },
    styles: {
      path: 'app/',
      files: './app/**/*.styl'
    }
  },
  build: {
    scripts: 'build/scrips/',
    markup: 'build/',
    styles: 'build/styles/',
  }
}

gulp.task('build-scripts', function() {
  return gulp.src(config.source.scripts.files)
    .pipe($.concat('app-build.js'))
    .pipe($.uglify({mangle: false }))
    .pipe(gulp.dest(config.build.scripts));
});

gulp.task('build-markup', function() {
  return gulp.src(config.source.markup.files)
    .pipe(gulp.dest(config.build.markup));
});

gulp.task('build-styles', function() {
  return gulp.src(config.source.styles.files)
    .pipe($.stylus())
    .pipe(gulp.dest(config.build.styles));
});


gulp.task('default', function() {
  // place code for your default task here
});