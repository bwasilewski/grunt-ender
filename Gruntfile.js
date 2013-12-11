module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // JSHint config
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
    
    // Uglify config
    uglify: {
      build: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      }
    },

    // SASS config
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/styles.css' : 'scss/styles.scss'
        }
      }
    },

    // Watch config
    watch: {
      options: {
        livereload: {
          port: 9000
        }
      },
      html: {
        files: ['*.html'],
        tasks: []
      },
      js: { 
        files: ['js/script.js', 'Gruntfile.js'],
        tasks: ['jshint', 'uglify']
      },
      sass: {
        files: ['scss/styles.scss'],
        tasks: ['sass']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Set up our default task
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'watch']);
};