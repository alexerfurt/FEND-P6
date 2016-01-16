## FEND Project 4 - Website Performance Optimization

Check out on: http://alexerfurt.github.io/dist/index.html

### Getting started

NPM has been used as a package manager and Gulp for build automation. The following gulp-plugins will be needed to reconstruct files within the 'dist' directory out of the production files within the 'src' folder:

* gulp-uglify
* gulp-inline-css
* gulp-image-optimization
* gulp-htmlmin
* gulp-jshint
* gulp-cssnano
* gulp-notify

See also package.json file for all dependencies. All of them can be installed using the "npm install --save-dev <GULP_PLUGIN>" command via terminal (MAC) or equivalent consoles.

####Part 1: Optimize PageSpeed Insights score for index.html

//1.Changes made for images (in /img and views/images)

*profilepic.jpg is compressed

*pizzeria.jpg is resized and compressed.

//2.Changes made in index.html

*media query "print" for print.css

*loaded google analytics.js & perfmatters.js scripts asynchronously

*loaded google font asynchronously with web font loader in footer

//3.Build automation - piping files from 'src' to corresponding 'dist'-folder

*inlined styles into index.html

*further compression of profilepic.jpg (gulp-image-optimization plugin)

*JS linting and minification (uglify)

*HTML minification

####Part 2: Optimize Frames per Second in pizza.html

//1.Optimized the 'uploadPosition' function:

*Replaced 'querySelectorAll('.mover') through 'getElementsByClassName('mover') since functions like querySelector are considered as not as efficient as JS DOM-querying functions

*Items variable has been taken out of the function since the array supposed to be the same every time updatePositions function runs and therefore doesn't need to be re-created & re-calculated everytime.

*Same applies to the lookup items.length that is saved into variable numPizzas, since its usually faster to look up variable x than x.y.

*Same applies for document.body.scrollTop within the for-loop, to avoid a lookup in the form x.y.z. Its pre-calculated value (divided by 1250) is saved in the variable 'cachedTop' outside the for-loop.

*Since there are only 5 unique phase values allowed (modulo % operator), an own for-loop generates those 5 ones, calculates the corresponding x-translation and puts it into an array

*Initial for-loop fills in the unique phase values from phaseArray into an overall movement variable until itemsLength is reached. 

*Instead of items[i].style.left the transform & translate3d option is used due to efficiency and to reduce paint time overall.

//2.Optimized number of sliding pizzas generated when the page loads and the for-loop that actually creates and appends all of the pizzas when the page loads. 

*Reduced number of sliding pizzas from 200 to a total of 50 pizzas calculated when scrolling.
*Reduced number of pizzas in page load from 100 to 50 since. For both, new values appear to be enough when page loads.

//3.Optimized function changePizzaSizes(size)

*Optimized by replacing 'querySelectorAll' with 'getElementsByClassName' and put the whole selector into the variable pizzaItems.

*All variables that have the same value as soon as the functions starts (pizzaItems, numPizzas, dx, newwidth) were taken out of the for-loop in order to prevent unnecessary re-creation & re-calculations and thus to increase computational efficiency (<5ms time to resize pizza)

//4.Build automation - piping files from 'src' to corresponding 'dist'-folder

*further compression of pizzeria.jpg

*JS linting and minification (uglify)

*CSS and HTML minification
   
