var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  camelize: true
});

var config = {
  source: {
    scripts: {
      path: 'app/',
      files: './app/**/*.js'
    }
  },
  build: {
    scripts: 'build/scrips/'
  }
}

gulp.task('build-scripts', function() {
  return gulp.src(config.source.scripts.files)
    .pipe($.concat('app-build.js'))
    .pipe($.uglify({mangle: false }))
    .pipe(gulp.dest(config.build.scripts));

});

gulp.task('default', function() {
  // place code for your default task here
});