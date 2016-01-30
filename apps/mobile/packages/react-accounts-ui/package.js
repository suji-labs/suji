Package.describe({
  name: 'shinejs:react-accounts-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
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
    'underscore',
    'react',
    'reactrouter:react-router',
    'accounts-base',
    'accounts-password',
    'shinejs:react-overlays'
  ],'client');

  api.addFiles([
    'react-accounts-ui.js',
    'client/0.jsx',
    'client/Input.jsx',
    'client/InputPassword.jsx',
    'client/SignIn.jsx',
    'client/SignInPasswordService.jsx',
    'client/SignInOtherServices.jsx',
    'client/SignInContainer.jsx',
    'client/SignUp.jsx',
    'client/SignUpContainer.jsx',
    'client/ForgotPassword.jsx',
    'client/ForgotPasswordContainer.jsx',
    'client/ResetPassword.jsx',
    'client/ResetPasswordContainer.jsx',
    'client/ChangePassword.jsx',
    'client/ChangePasswordContainer.jsx',
    'client/Popup.jsx'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shinejs:react-accounts-ui');
  api.addFiles('react-accounts-ui-tests.js');
});
