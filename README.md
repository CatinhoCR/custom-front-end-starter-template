# Front End Starter Setup
In order to run the site locally you will need to have gulp and bower installed in your local machine.
Run:
npm install
bower install

## Deprecated. *** TO DO: Re-write this.
Make sure to include the proxy server to the gulpfile.js (if using localhost virtual host entry)
Or delete proxy line, and uncomment server line if serving statically from html folder.

and then you can run any of the gulp tasks.
sass (stylesheets get compiled to the dist folder)
compress (scripts compiled and uglified to dist folder)
watch (watches files for changes and sets up live reload with browser sync)