/**
 * Created by Sakshi on 3/9/2016.
 */

/*
var gulp = require('gulp');

gulp.task('default', function() {
    // place code for your default task here
});
*/
var protractor = require("gulp-protractor").protractor;
var gulp = require('gulp');
var protractorQA = require('gulp-protractor-qa');

gulp.task('default', function() {
/*    gulp.src(["*spec.js"])
        .pipe(protractor({
            configFile: "config.js"
        }))
        .on('error', function(e) { console.log(e) })*/
    protractorQA.init({
        runOnce: true, // optional: when you don't want to watch files changes
		testSrc: './specs/*spec.js',
		viewSrc: ['../src/login.html']
    });
});

