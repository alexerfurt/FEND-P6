var gulp = require('gulp'),
	critical = require('critical'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
	//minifyCSS = require('gulp-minify-css');

gulp.task('default', ['scripts','styles']);

gulp.task('scripts', function(){	
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('minCSS'));	
});

