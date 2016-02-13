Package.describe({
  name: 'shinejs:react-cloudinary',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({ cloudinary: "1.2.1" });

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'underscore',
  ]);

  api.addFiles('react-cloudinary.js');

  api.use([
    'templating',
    'tracker',
    'react',
  ], 'client');

  api.addFiles([
    'lib/jquery.ui.widget.js',
    'lib/jquery.iframe-transport.js',
    'lib/jquery.fileupload.js',
    'lib/jquery.cloudinary.js',
    'client/style.css',
    'client/cloudinary.js',
    'client/components/DirectUploader.jsx',
    'client/components/ProgressBar.jsx',
  ], 'client');

  api.addFiles([
    'server/cloudinary-server.js',
  ], 'server');

  api.addAssets([
    'cloudinary_cors.html'
  ], 'server');

  api.export('Cloudinary');
  api.export('CloudinaryServer');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shinejs:react-cloudinary');
  api.addFiles('react-cloudinary-tests.js');
});
