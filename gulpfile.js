var gulp = require('gulp'), 
	uglify = require('gulp-uglify'),
	inlineCSS = require('gulp-inline-css'),
	imageop = require('gulp-image-optimization'),
	htmlmin = require('gulp-htmlmin'),
	jshint = require('gulp-jshint'),
	notify= require('gulp-notify');

	// Inlining CSS files
gulp.task('styles', function(){
	return gulp.src('./src/index.html')
    	.pipe(inlineCSS({
        	applyStyleTags: true,
        	applyLinkTags: true,
        	removeStyleTags: true,
        	removeLinkTags: true
    	}))
		.pipe(gulp.dest('./dist/'))
		.pipe(notify({ message: 'Styles task complete' }));	
});

	//Hinting js files to make sure it conforms to appropriate coding guidelines
gulp.task('jshint', function() {
    return gulp.src('./src/js/perfmatters.js')
        .pipe(jshint())
    	.pipe(jshint.reporter('default'))
    	.pipe(notify({ message: 'JS Hinting task complete' }));
});

	//Minifies JS file after jshint task finished
gulp.task('scripts', ['jshint'], function(){
	return gulp.src('./src/js/perfmatters.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
		.pipe(notify({ message: 'Scripts task complete' }));	
});

	//Minifies the index.html file after inlining css finished
gulp.task('html', ['styles'], function() {
    return gulp.src('./dist/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'))
		.pipe(notify({ message: 'HTML task complete' }));	
});


	//Optimizes size of my image file and outputs it to dist/img folder
gulp.task('imagesProfile', function() {
    return gulp.src('./src/img/profilepic.jpg')
         .pipe(imageop({
             optimizationLevel: 5,
        	 progressive: true,
        	 interlaced: true
         }))
         .pipe(gulp.dest('./dist/img/'));
});		 

	 //Optimizes size of an image file within the views folder and outputs it to dist/views/img folder
gulp.task('images', function() {
	return gulp.src('./src/views/images/pizzeria.jpg')
         .pipe(imageop({
             optimizationLevel: 5,
        	 progressive: true,
        	 interlaced: true
         }))
         .pipe(gulp.dest('./dist/views/images/'))
		 .pipe(notify({ message: 'Image task complete' }));
});

gulp.task('default', ['html','scripts','imagesProfile','images']);