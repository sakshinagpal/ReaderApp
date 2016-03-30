/**
 * Created by Sakshi on 3/23/2016.
 */
var protractorQA = require('gulp-protractor-qa');

protractorQA.init({
    runOnce: true, // optional: when you don't want to watch files changes
    testSrc: './test/specs/login.spec.js',
    viewSrc: ['./src/login.html']
})