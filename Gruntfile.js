module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    watch: {},

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
      }
    }
  });

  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('default', ['test']);
};
