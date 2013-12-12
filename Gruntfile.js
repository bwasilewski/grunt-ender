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
      build: {
        src: ['Gruntfile.js', 'js/scripts.js']
      }
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
        src: 'scss/styles.scss',
        dest: 'css/styles.css'
      }
    },

    // Watch config
    watch: {
      options: {
        livereload: {
          port: 9000
        }
      },
      jshint: { 
        files: '<%= jshint.build.src %>',
        tasks: ['jshint']
      },
      uglify: {
        files: '<%= uglify.build.src %>',
        tasks: ['uglify']
      },
      sass: {
        files: '<%= sass.dist.src %>',
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