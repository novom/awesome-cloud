Package.describe({
  name: 'novom:awesome-cloud',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'This is a wrapper for the http://www.jqueryscript.net/text/Awesome-Tag-Cloud-Plugin-with-jQuery-Html5-Canvas-awesomeCloud.html',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/novom/awesome-cloud.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('jquery.awesomeCloud-0.2.js', 'client');
});
