module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['app.js'],
    },
    watch: {
      files: ['app.js'],
      tasks: ['eslint']
    }
  });

  grunt.registerTask('default', ['watch']);
};
