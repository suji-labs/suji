Package.describe({
  name: 'shinejs:react-spin',
  version: '2.3.2',
  summary: 'React Spin componet using spin.js',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  "spin.js": "2.3.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'underscore',
    'react',
  ], 'client');

  api.addFiles([
    '.npm/package/node_modules/spin.js/spin.js',
    'react-spin.js',
    'client/style.css',
    'client/spinner.jsx'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shinejs:react-spin');
  api.addFiles('react-spin-tests.js');
});
