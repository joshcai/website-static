module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        options: {
          data: function(dest, src) {
            return grunt.file.readJSON('src/context.json');
          },
        },
        files: {
          'build/index.html': ['src/jade/index.jade'],
        },
      },
    },

    less: {
      minify: {
        options: {
          cleancss: true,
        },
        files: {
          'build/css/styles.css': 'src/less/styles.less',
        },
      },
    },

    watch: {
      css: {
        files: ['src/less/*.less'],
        tasks: ['less'],
      },
      html: {
        files: ['src/jade/*.jade'],
        tasks: ['jade'],
      },
   },

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'less']);

};
