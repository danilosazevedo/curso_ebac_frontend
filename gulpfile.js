const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))

function comprimeimagem(){
    return gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images2'))
}

function comprimeJavascript(){
    return gulp.src('./java/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./java/'))
}

function compilaSass(){
    return gulp.src('./*.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(gulp.dest('./'))
}

exports.images = comprimeimagem;
exports.javascript = comprimeJavascript;
exports.sass = compilaSass;