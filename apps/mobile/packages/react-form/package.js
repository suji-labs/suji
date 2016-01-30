Package.describe({
  name: 'shinejs:react-form',
  version: '0.0.1',
  summary: 'Form components for React',
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
    'react',
    'chuangbo:marked',
  ]);

  api.addFiles([
    'react-form.js',
    'lib/0.jsx',
    'lib/Form.jsx',
    'lib/Actions.jsx',
    'lib/Alert.jsx',
    'lib/Button.jsx',
    'lib/Switch.jsx',
    'lib/InputSwitch.jsx',
    'lib/InputText.jsx',
    'lib/Select.jsx',
    'lib/TextArea.jsx',
    'lib/Editable.jsx',
    'lib/MarkdownEditor.jsx',
  ]);

  api.export('Form');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shinejs:react-form');
  api.addFiles('react-form-tests.js');
});
