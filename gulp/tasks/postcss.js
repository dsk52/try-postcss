var gulp       = require('gulp');
var postCss    = require('gulp-postcss');

gulp.task('css', function() {
  gulp.src('source/pcss/*.css')
    .pipe(postCss([
      require('postcss-easy-import')({
        glob: true
      }),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('autoprefixer'),
      require('cssnano')
    ]))
    .pipe(gulp.dest('dest/css/'));
});
