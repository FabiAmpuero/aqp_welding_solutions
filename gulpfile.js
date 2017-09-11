var gulp = require('gulp');

gulp.task('default', function(){
  console.log('gulp is running correctly');
});

var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
});
