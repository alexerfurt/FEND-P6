var gulp = require('gulp'), 
	plumber = require('gulp-plumber'),
	critical = require('critical'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cssnano = require('gulp-cssnano');

// Gulp plumber error handler
var onError = function(err) {
	console.log(err);
}

gulp.task('default', ['scripts', 'styles', 'critical']);

gulp.task('scripts', function(){
	//Uglify and rename js files
	gulp.src('js/*.js')
		.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('dist/js/'));
});

gulp.task('styles', function(){
	//Minify CSS with cssnano
		gulp.src('./css/style.css')
			.pipe(cssnano())
		.pipe(rename('cssmin.css'))
			.pipe(gulp.dest('./dist/css'));	
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