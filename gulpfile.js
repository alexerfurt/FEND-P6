var gulp = require('gulp'),
	critical = require('critical'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
	//minifyCSS = require('gulp-minify-css');

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

