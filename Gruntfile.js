module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    pug: {
      compile: {
        options: {
          data: function(dest, src) {
            return grunt.file.readJSON('src/context.json');
          },
        },
        files: {
          'index.html': ['src/pug/index.pug'],
        },
      },
    },

    less: {
      minify: {
        options: {
          compress: true,
        },
        files: {
          'css/styles.css': 'src/less/styles.less',
        },
      },
    },

    watch: {
      css: {
        files: ['src/less/*.less'],
        tasks: ['less'],
      },
      html: {
        files: ['src/pug/*.pug'],
        tasks: ['pug'],
      },
   },

  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['pug', 'less']);

};
