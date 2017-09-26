var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('pug',function(){
	gulp.src('./*.pug')
	.pipe(pug({
			pretty:true
		}))
	.pipe(gulp.dest('./app/'))
});

gulp.task('sass',function(){
	gulp.src('./scss/*.scss')
	.pipe(autoprefixer())
	.pipe(sass({
		includePaths: ['scss']
	}))
	.pipe(gulp.dest('./app/css/'));
})