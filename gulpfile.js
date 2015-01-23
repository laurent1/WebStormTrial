/**
 * Created by laurentMac on 1/23/15.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");
gulp.task("default", function () {
  return gulp.src("./public/js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});