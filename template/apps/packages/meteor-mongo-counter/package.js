Package.describe({
  name: 'shinejs:meteor-mongo-counter',
  version: '0.0.1',
  summary: 'Auto-incremental counter for MongoDB',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'mongo-livedata',
    'check',
  ]);

  api.imply([
    'fongandrew:find-and-modify'
  ]);

  api.addFiles('meteor-mongo-counter.js');

  api.export('MongoCounters');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shinejs:meteor-mongo-counter');
  api.addFiles('meteor-mongo-counter-tests.js');
});
