Package.describe({
  name: 'shinejs:logger',
  version: '0.4.0',
  summary: 'A simple Meteor logger that works on the server',
  git: 'https://github.com/miraten/meteor-logger',
  documentation: 'README.md'
});

Npm.depends({
  winston: "2.1.1",
  'winston-mongodb': "1.3.0",
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'underscore',
  ], 'server');

  api.addFiles('logger.js', 'server');

  api.export('Logger', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('shinejs:logger');
  api.addFiles('logger-tests.js');
});
