module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      all: ['Gruntfile.js', 'js/scripts.js']
    },
    
    uglify: {
      build: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      }
    },

    watch: {
      html: {
        files: ['*.html'],
        tasks: []
      },
      js: { 
        files: ['js/script.js', 'Gruntfile.js'],
        tasks: ['jshint', 'uglify']
      },
      options: {
        livereload: true
      }
    }
  });

  // Load the jshint plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the uglify plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the watch plugin
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Set up our default task
  grunt.registerTask('default', ['jshint', 'uglify', 'watch']);
};