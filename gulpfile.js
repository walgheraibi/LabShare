var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')


gulp.task('js', function () {
    gulp.src(['service/lib/common/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('ui/js/lsModels.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
})


gulp.task('watch', ['js'], function () {
    gulp.watch('service/lib/common/**/*.js', ['js'])
})
