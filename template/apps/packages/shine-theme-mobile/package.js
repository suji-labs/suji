
Package.describe({
  summary: 'Shine Theme Base',
  version: '0.0.1',
  name: 'shinejs:shine-theme-mobile',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'less',
    'shinejs:bootstrap-less'
  ]);

  api.addFiles([
    'client/style.less',
  ], 'client');

  api.addFiles([
    // includes
    'client/import/variables.less',
    'client/import/layout.less',
    'client/import/header.less',
    'client/import/aside.less',
    'client/import/content.less',
    'client/import/page.less',
    'client/import/overlay.less',

    // components
    'client/import/components/about.less',
    'client/import/components/form.less',
    'client/import/components/markdown.less',
    'client/import/components/animations.less',
    'client/import/components/route_transition.less',
    'client/import/components/list.less',
    'client/import/components/post.less',
    'client/import/components/accounts.less',
    'client/import/components/connection.less',
    'client/import/components/spinner.less',

  ],'client', { isImport: true });

});
