var gulp = require('gulp'), 
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	inlineCSS = require('gulp-inline-css'),
	sass = require('gulp-sass'),
	imageop = require('gulp-image-optimization'),
	htmlmin = require('gulp-htmlmin'),
	jshint = require('gulp-jshint'),
	critical = require('critical'),
	cssnano = require('gulp-cssnano'),
	notify= require('gulp-notify');

	// Compiles scss files and outputs them renamed to dist/css/*.css
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

	//Minify JS files
gulp.task('scripts', ['jshint'], function(){
	return gulp.src('./src/js/perfmatters.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
		.pipe(notify({ message: 'Scripts task complete' }));	
});

	// Minifies the index.html file and pipe it to dist/*.html
gulp.task('html', ['styles'], function() {
    return gulp.src('./dist/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'))
		.pipe(notify({ message: 'HTML task complete' }));	
});
	// Generate & Inline Critical-path CSS 
gulp.task('critical', function () {
    critical.generate({
        inline: true,
        base: 'dist/',
        src: 'index.html',
        dest: 'dist/index-critical.html',
        minify: true,
        width: 320,
        height: 480
	});
});

	// Optimizes size of my image file and outputs them to dist folders
gulp.task('imagesProfile', function() {
    return gulp.src('./src/img/profilepic.jpg')
         .pipe(imageop({
             optimizationLevel: 5,
        	 progressive: true,
        	 interlaced: true
         }))
         .pipe(gulp.dest('./dist/img/'));
});		 

	 // Optimizes size of my image files in the views folder and outputs them to dist/views folder
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