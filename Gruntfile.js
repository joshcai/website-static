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

    imagemin: {
      compress: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/'
        }],
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
      img: {
        files: ['src/img/*.*'],
        tasks: ['imagemin'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'less', 'imagemin']);

};
