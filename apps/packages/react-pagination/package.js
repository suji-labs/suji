Package.describe({
  name: 'shinejs:react-pagination',
  version: '0.0.1',
  summary: 'paged list component with infinite scrolling feature',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'react',
    'reactive-var',
    'shinejs:react-spin',
  ], 'client');

  api.addFiles([
    'react-pagination.js',
    'lib/infinite-scroll.js',
    'lib/Spinner.jsx',
    'lib/LoadMore.jsx',
    'lib/PagedList.jsx',
  ], 'client');

  api.export('Pagination');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shinejs:react-pagination');
  api.addFiles('react-pagination-tests.js');
});
