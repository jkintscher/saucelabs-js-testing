# Dependencies

Install all that’s needed with a simple

`$ npm install`

*(To see all dependencies, take a look at the `package.json` and `bower.json`.)*

# Set up

In order to run your tests on SauceLabs with Karma you need to  make your username
and access key available to Grunt task. In your terminal session, run:

````bash
export SAUCE_USERNAME=my-username
export SAUCE_ACCESS_KEY=my-access-key
````

**Never, ever set them directly in `karma.conf.js`!**

# Tunneling

If you want Karma to open a tunnel to SauceLabs for your, set `sauceLabsl.startConnect`
in `karma.conf.js` to `true`. Because this can be slow it might be a good idea to
re-use an already open tunnel.

All that’s needed for this is in [the docs](https://saucelabs.com/docs/connect).
Using Sauce Connect will not require you to make *any* config changes and is the
faster and recommended way to go.

# Run Your Tests

Just run

`$ grunt test`

and everything will run. You can configure everything from what tests to run,
where to run them and how to get the results in the `Gruntfile.js` and `karma.conf.js`.
