const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const del = require('del')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var open = require('gulp-open')

gulp.task('styles', () => {
    return gulp
        .src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'))
})

gulp.task('clean', () => {
    return del(['./assets/css/madilu.css'])
})

var Paths = {
    HERE: './',
    DIST: 'dist/',
    CSS: './assets/css/',
    SCSS_TOOLKIT_SOURCES: './assets/scss/madilu.scss',
    SCSS: './assets/scss/**/**',
}

gulp.task('compile-scss', function () {
    return gulp
        .src(Paths.SCSS_TOOLKIT_SOURCES)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write(Paths.HERE))
        .pipe(gulp.dest(Paths.CSS))
})

gulp.task('watch', function () {
    gulp.watch(Paths.SCSS, gulp.series('compile-scss'))
})

gulp.task('open', function () {
    gulp.src('index.html').pipe(open())
})

gulp.task('open-app', gulp.parallel('open', 'watch'))
