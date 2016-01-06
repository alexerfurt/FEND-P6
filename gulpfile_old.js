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







/**

gulp.task('default', ['scripts','styles']);

gulp.task('copystyles', function(){
	return gulp.src(['css/style.css'])
		.pipe(rename({
			basename: "site"
		}));
		.pipe(gulp_dest('css'));
});

gulp.task('critical', ['build', 'copystyles'], function(){
	critical.generateInline({
	        base: '/',
	        src: 'index.html',
	        styleTarget: 'css/style.css',
	        htmlTarget: 'index.html',
	        width: 320,
	        height: 480,
	        minify: true
	    });
});

