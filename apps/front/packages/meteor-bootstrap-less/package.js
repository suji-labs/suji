Package.describe({
  name: 'shinejs:bootstrap-less',
  version: '1.2.1',
  summary: 'Bootstrap wrapper with less files',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'jquery',
    'less'
  ], 'client');


  api.addFiles([
    '3.3.5/js/transition.js',
    '3.3.5/js/alert.js',
    '3.3.5/js/button.js',
    '3.3.5/js/carousel.js',
    '3.3.5/js/collapse.js',
    '3.3.5/js/dropdown.js',
    '3.3.5/js/modal.js',
    '3.3.5/js/tooltip.js',
    '3.3.5/js/popover.js',
    '3.3.5/js/scrollspy.js',
    '3.3.5/js/tab.js',
    '3.3.5/js/affix.js'
  ], 'client');

  api.addFiles('bootstrap.less', 'client', { isImport: true });

  api.addFiles([
    '3.3.5/imports/variables.less',
    '3.3.5/imports/mixins/hide-text.less',
    '3.3.5/imports/mixins/opacity.less',
    '3.3.5/imports/mixins/image.less',
    '3.3.5/imports/mixins/labels.less',
    '3.3.5/imports/mixins/reset-filter.less',
    '3.3.5/imports/mixins/resize.less',
    '3.3.5/imports/mixins/responsive-visibility.less',
    '3.3.5/imports/mixins/size.less',
    '3.3.5/imports/mixins/tab-focus.less',
    '3.3.5/imports/mixins/reset-text.less',
    '3.3.5/imports/mixins/text-emphasis.less',
    '3.3.5/imports/mixins/text-overflow.less',
    '3.3.5/imports/mixins/vendor-prefixes.less',
    '3.3.5/imports/mixins/alerts.less',
    '3.3.5/imports/mixins/buttons.less',
    '3.3.5/imports/mixins/panels.less',
    '3.3.5/imports/mixins/pagination.less',
    '3.3.5/imports/mixins/list-group.less',
    '3.3.5/imports/mixins/nav-divider.less',
    '3.3.5/imports/mixins/forms.less',
    '3.3.5/imports/mixins/progress-bar.less',
    '3.3.5/imports/mixins/table-row.less',
    '3.3.5/imports/mixins/background-variant.less',
    '3.3.5/imports/mixins/border-radius.less',
    '3.3.5/imports/mixins/gradients.less',
    '3.3.5/imports/mixins/clearfix.less',
    '3.3.5/imports/mixins/center-block.less',
    '3.3.5/imports/mixins/nav-vertical-align.less',
    '3.3.5/imports/mixins/grid-framework.less',
    '3.3.5/imports/mixins/grid.less',
    '3.3.5/imports/mixins.less',
    '3.3.5/imports/normalize.less',
    '3.3.5/imports/print.less',
    '3.3.5/imports/glyphicons.less',
    '3.3.5/imports/scaffolding.less',
    '3.3.5/imports/type.less',
    '3.3.5/imports/code.less',
    '3.3.5/imports/grid.less',
    '3.3.5/imports/tables.less',
    '3.3.5/imports/forms.less',
    '3.3.5/imports/buttons.less',
    '3.3.5/imports/component-animations.less',
    '3.3.5/imports/dropdowns.less',
    '3.3.5/imports/button-groups.less',
    '3.3.5/imports/input-groups.less',
    '3.3.5/imports/navs.less',
    '3.3.5/imports/navbar.less',
    '3.3.5/imports/breadcrumbs.less',
    '3.3.5/imports/pagination.less',
    '3.3.5/imports/pager.less',
    '3.3.5/imports/labels.less',
    '3.3.5/imports/badges.less',
    '3.3.5/imports/jumbotron.less',
    '3.3.5/imports/thumbnails.less',
    '3.3.5/imports/alerts.less',
    '3.3.5/imports/progress-bars.less',
    '3.3.5/imports/media.less',
    '3.3.5/imports/list-group.less',
    '3.3.5/imports/panels.less',
    '3.3.5/imports/responsive-embed.less',
    '3.3.5/imports/wells.less',
    '3.3.5/imports/close.less',
    '3.3.5/imports/modals.less',
    '3.3.5/imports/tooltip.less',
    '3.3.5/imports/popovers.less',
    '3.3.5/imports/carousel.less',
    '3.3.5/imports/utilities.less',
    '3.3.5/imports/responsive-utilities.less'
  ], 'client');

  api.addAssets([
    '3.3.5/fonts/glyphicons-halflings-regular.eot',
    '3.3.5/fonts/glyphicons-halflings-regular.svg',
    '3.3.5/fonts/glyphicons-halflings-regular.ttf',
    '3.3.5/fonts/glyphicons-halflings-regular.woff',
    '3.3.5/fonts/glyphicons-halflings-regular.woff2'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('shinejs:bootstrap-less');
  api.addFiles('bootstrap-less-tests.js');
});
