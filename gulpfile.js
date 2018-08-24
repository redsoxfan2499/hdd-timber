/* file: gulpfile.js */

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var cssFiles = 'source/scss/*.scss',
    cssDest = 'public/css';

var jsFiles = 'source/javascript/*.js',
    jsDest = 'public/javascript';

gulp.task('sass', function() {
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cssDest))
		.pipe(notify({ message: 'Wait for it....wait for it!!!' }));
});

gulp.task('compress', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function(){
    gulp.watch(cssFiles, ['sass']);
    gulp.watch(jsFiles, ['compress']);
  })

gulp.task('default', ['sass','watch', 'compress']);
