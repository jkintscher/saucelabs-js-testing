module.exports = function(grunt) {
  var browsers = [{
    browserName: "internet explorer",
    platform: "VISTA",
    version: "8"
  }, {
    browserName: "chrome",
    platform: "XP"
  }];

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    'saucelabs-qunit': {
      all: {
        options: {
          urls: ["http://127.0.0.1:9999/tests/index.html"],
          tunnelTimeout: 5,
          concurrency: 2,
          browsers: browsers,
          detailedError: true,
          testname: "Hacksgiving Units",
          tags: ["master"],
          onTestComplete: function(status, page, config, browser) {
            console.log("Browser: ", config.browserName, config.version, "on", config.platform);
          }
        }
      }
    },
    watch: {}
  });

  // Loading dependencies
  for (var key in grunt.file.readJSON("package.json").devDependencies) {
      if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
  }

  grunt.registerTask("dev", ["connect", "watch"]);
  grunt.registerTask("test", ["connect", "saucelabs-qunit"]);
};
