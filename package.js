Package.describe({
  name: 'appmill:clerk',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Store anything briefly for anyone to retrieve safely',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rjalili/clerk.git,
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('appmill:clerk.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('appmill:clerk');
  api.addFiles('appmill:clerk-tests.js');
});
