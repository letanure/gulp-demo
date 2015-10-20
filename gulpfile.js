var gulp = require('gulp'),
  	gulpConcat = require('gulp-concat');

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
    .pipe(gulpConcat('app-build.js'))
    .pipe(gulp.dest(config.build.scripts));

});

gulp.task('default', function() {
  // place code for your default task here
});