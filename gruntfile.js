/**
 * Created by laurentMac on 1/23/15.
 */
module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ["./public/js/**/*.js"],
      options: {
        unused: true
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.registerInitTask("default", ["jshint"]);
};
