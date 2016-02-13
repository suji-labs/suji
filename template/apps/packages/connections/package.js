Package.describe({
  name: 'shinejs:connections',
  version: '0.2.0',
  summary: 'monitor all the connection status of the Meteor server',
  git: 'https://github.com/miraten/meteor-connections',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'ecmascript',
    'underscore'
  ]);

  api.use([
    'session',
    'tracker',
    'random',
    'mongo-livedata'
  ], 'client');

  api.use([
    'mongo',
    'shinejs:logger',
  ], 'server');

  api.addFiles('lib/connections.js');
  api.addFiles('lib/client.js', 'client');
  api.addFiles('lib/server.js', 'server');

  api.export('Connection');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('shinejs:connections');
  api.addFiles('test/connections-tests.js');
});
