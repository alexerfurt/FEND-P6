var gulp = require('gulp'), 
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	imageop = require('gulp-image-optimization'),
	htmlmin = require('gulp-htmlmin'),
	jshint = require('gulp-jshint'),
	notify= require('gulp-notify');

	// Compiles scss files and outputs them renamed to dist/css/*.css
gulp.task('styles', function(){
	return gulp.src('src/css/style.css')
		.pipe(sass())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(notify({ message: 'Styles task complete' }));	
});

	//Hinting js files to make sure it conforms to appropriate coding guidelines
gulp.task('jshint', function() {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
    	.pipe(jshint.reporter('default'))
    	.pipe(notify({ message: 'JS Hinting task complete' }));
});

	//Concatenate, minify and rename JS files
gulp.task('scripts', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('all.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
		.pipe(notify({ message: 'Scripts task complete' }));	
});

	// Minifies the index.html file and pipe it to dist/*.html
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'))
		.pipe(notify({ message: 'HTML task complete' }));	
});

	// Optimizes sizes of our image files and outputs them to dist/image/*
gulp.task('images', function() {
    return gulp.src('./src/img/**/*')
         .pipe(imageop({
             optimizationLevel: 5,
        	 progressive: true,
        	 interlaced: true
         }))
         .pipe(gulp.dest('./dist/img/'))
		 .pipe(notify({ message: 'Image task complete' }));
});

gulp.task('default', ['styles','jshint','scripts','html','images']);