module.exports = function(grunt) {
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

  // Loading dependencies
  for(var key in grunt.file.readJSON('package.json').devDependencies) {
      if(key !== 'grunt' && key.indexOf('grunt') === 0)
        grunt.loadNpmTasks(key);
  }

  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('default', ['test']);
};
