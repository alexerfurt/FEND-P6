var gulp = require('gulp'),
	critical = require('critical'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
		plumber = require('gulp-plumber'),
		cssnano = require('gulp-cssnano'),
	//minifyCSS = require('gulp-minify-css');

	
		// Gulp plumber error handler
	var onError = function(err) {
		console.log(err);
	}


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

gulp.task('critical', function(){
    return gulp.src('index.html')
        .pipe(critical.generate({base: 'dist/', inline: true, css: 'css/style.css', minify: true}))
        .pipe(gulp.dest('index-critical.html'));
});

gulp.task('critical', function () {
    critical.generate({
        inline: true,
        base: 'dist/',
        src: 'index.html',
	    css: 'css/style.css',
        dest: 'index-critical.html',
        width: 320,
        height: 480,
        minify: true
    });
});