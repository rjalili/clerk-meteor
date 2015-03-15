Package.describe({
  name: 'appmill:clerk',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Store anything briefly for anyone you choose to retrieve safely',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rjalili/clerk-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('appmill:clerk-both.js');
  api.addFiles('appmill:clerk-server.js',"server");
  api.use("http");
//  api.use("meteor");
//  api.use("mongo-livedata");
  api.use("check");
//  api.use("matb33:collection-hooks@0.7.6");
//  api.use('iron:router@1.0.7');
  // Give users of this package access to the Templating package.
  //api.imply('templating')
  // Export the object 'Clerk' to packages or apps that use this package.
  api.export('Clerk');
  // Specify the source code for the package.
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('appmill:clerk');
  api.addFiles('appmill:clerk-tests.js');
});
