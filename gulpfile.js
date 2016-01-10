var gulp = require('gulp'), 
	uglify = require('gulp-uglify'),
	inlineCSS = require('gulp-inline-css'),
	imageop = require('gulp-image-optimization'),
	htmlmin = require('gulp-htmlmin'),
	jshint = require('gulp-jshint'),
	cssnano = require('gulp-cssnano'),
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

	// Minifying CSS files in views folder
gulp.task('stylesPizza', function(){
	return gulp.src('./src/views/css/*.css')
    	.pipe(cssnano())
		.pipe(gulp.dest('./dist/views/css'))
		.pipe(notify({ message: 'StylesPizza task complete' }));	
});

	//Hinting js files to make sure it conforms to appropriate coding guidelines
gulp.task('jshint', function() {
    return gulp.src('./src/js/perfmatters.js')
        .pipe(jshint())
    	.pipe(jshint.reporter('default'))
    	.pipe(notify({ message: 'JS Hinting task complete' }));
});

	//Hinting js files in views folder to make sure it conforms to appropriate coding guidelines
gulp.task('jshintPizza', function() {
    return gulp.src('./src/views/js/*.js')
        .pipe(jshint())
    	.pipe(jshint.reporter('default'))
    	.pipe(notify({ message: 'JS Pizza Hinting task complete' }));
});

	//Minifies JS file after jshint task finished
gulp.task('scripts', ['jshint'], function(){
	return gulp.src('./src/js/perfmatters.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
		.pipe(notify({ message: 'Scripts task complete' }));	
});

	//Minifies JS file in views folder after jshint task finished
gulp.task('scriptsPizza', ['jshintPizza'], function(){
	return gulp.src('./src/views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/views/js/'))
		.pipe(notify({ message: 'ScriptsPizza task complete' }));	
});

	//Minifies the index.html file after inlining css finished
gulp.task('html', ['styles'], function() {
    return gulp.src('./dist/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'))
		.pipe(notify({ message: 'HTML task complete' }));	
});

	//Minifies the index.html file after inlining css finished
gulp.task('htmlPizza', ['stylesPizza'], function() {
    return gulp.src('./src/views/pizza.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/views/'))
		.pipe(notify({ message: 'HTML-Pizza task complete' }));	
});

	//Optimizes size of my image file and outputs it to dist/img folder
gulp.task('images', function() {
    return gulp.src('./src/img/profilepic.jpg')
         .pipe(imageop({
             optimizationLevel: 5,
        	 progressive: true,
        	 interlaced: true
         }))
         .pipe(gulp.dest('./dist/img/'))
		 .pipe(notify({ message: 'Image task complete' }));
});		 

	 //Optimizes size of an image file within the views folder and outputs it to dist/views/img folder
gulp.task('imagesPizza', function() {
	return gulp.src('./src/views/images/pizzeria.jpg')
         .pipe(imageop({
             optimizationLevel: 5,
        	 progressive: true,
        	 interlaced: true
         }))
         .pipe(gulp.dest('./dist/views/images/'))
		 .pipe(notify({ message: 'ImagePizza task complete' }));
});

gulp.task('default', ['html','scripts','images','htmlPizza','scriptsPizza','imagesPizza']);