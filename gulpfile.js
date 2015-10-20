var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  camelize: true
});

var mainBowerFiles = require('main-bower-files');

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

gulp.task('build-bower', function() {
  return gulp.src(mainBowerFiles())
    .pipe($.concat('vendor.js'))
    .pipe($.uglify({
      mangle: false
    }))
    .pipe(gulp.dest(config.build.scripts));
});

gulp.task('build-scripts', function() {
  return gulp.src(config.source.scripts.files)
    .pipe($.concat('app-build.js'))
    .pipe($.uglify({
      mangle: false
    }))
    .pipe(gulp.dest(config.build.scripts));
});

gulp.task('build-styles', function() {
  return gulp.src(config.source.styles.files)
    .pipe($.stylus())
    .pipe(gulp.dest(config.build.styles));
});


gulp.task('build-markup', ['build-bower', 'build-scripts', 'build-styles'], function() {
  // list the development script & style files to inject on markup
  var sources = gulp.src([config.source.scripts.files, './build/**/*.css'], {
    read: false
  });
  return gulp.src(config.source.markup.files)
    .pipe($.inject(sources))
    .pipe(gulp.dest(config.build.markup));
});



gulp.task('default', function() {
  // place code for your default task here
});