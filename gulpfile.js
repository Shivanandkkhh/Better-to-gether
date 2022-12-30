
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function(){
    return  gulp.src('styles/custom.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets/css'))
})

gulp.task('watch', function(){
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
})