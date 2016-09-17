const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
  .pipe(babel({
    presets: ['latest']
  }))
  .pipe(gulp.dest('lib'))
})
