module.exports = function(config) {
  config.set({
    basePath: 'tests',

    files: [
      'units.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    frameworks: ['qunit'],

    plugins: [
      'karma-qunit',
      'karma-sauce-launcher'
    ],

    // Server config
    hostname: '127.0.0.1',
    port: parseInt(process.env.PORT, 10) + 1 || 9876, // web server port
    runnerPort: 9999, // cli runner port

    // Run config
    singleRun: true,
    autoWatch: false,
    captureTimeout: 10000, // If browser does not capture in given timeout [ms], kill it

    // Output config
    logLevel: config.LOG_INFO,
    colors: true,
    reporters: 'dots',

    // This speeds up the capturing a bit, as browsers don't even try to use websocket.
    transports: ['xhr-polling'],

    // SauceLabs config
    sauceLabs: {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: false,
      testName: 'Hacksgiving'
    },

    browsers: [
      "SL_Chrome",
      "SL_IE_10",
      "SL_Firefox",
      "SL_IE_8"
    ],

    // SauceLabs browsers
    customLaunchers: {
      "SL_Chrome": {
        base: "SauceLabs",
        browserName: "chrome",
        platform: "Linux"
      },
      "SL_Firefox": {
        base: "SauceLabs",
        browserName: "firefox"
      },
      "SL_Safari": {
        base: "SauceLabs",
        browserName: "safari",
        platform: "Mac 10.8",
        version: "6"
      },
      "SL_IE_8": {
        base: "SauceLabs",
        browserName: "internet explorer",
        platform: "Windows 7",
        version: "8"
      },
      "SL_IE_9": {
        base: "SauceLabs",
        browserName: "internet explorer",
        platform: "Windows 2008",
        version: "9"
      },
      "SL_IE_10": {
        base: "SauceLabs",
        browserName: "internet explorer",
        platform: "Windows 2012",
        version: "10"
      },
      "SL_IPHONE": {
        base: "SauceLabs",
        browserName: "iphone",
        platform: "Mac 10.8",
        version: "6"
      }
    }
  });
};
