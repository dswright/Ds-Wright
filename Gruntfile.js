module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [ 'client/bower_components/underscore.js', 'public/bower_components/jquery.js', 'public/bower_components/backbone.js', 'public/bower_components/handlebars.js'],
        dest: 'dist/production.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server/app.js'
      }
    },

    uglify: {
      build: {
        src: 'client/dist/production.js',
        dest: 'client/dist/production.min.js'
      }
    },

    jshint: {
      files: [
        // Add filespec list here
        'server/*/*.js', 'client/app/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        ignores: []
      }
    },

    cssmin: {
      target: {
        files: {
          'styles/styles-min.css': ['styles/styles.css']
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'client/app/*.js',
          'server/*/*.js',
          'server/*.js'
        ],
        tasks: [
          'jshint',
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'client/styles/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      //prodServer: {
        options: {
          stderr: false
        },
        target: {
          command: 'echo "weeeee"'
        }
      //}
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [ 'jshint','concat', 'css-min', 'uglify' //, 'mochaTest' - put this back when i get some tests.
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      // add your production server task here
      grunt.task.run(['shell']);
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    // add your deploy tasks here
    'build', 'upload'
  ]);
};