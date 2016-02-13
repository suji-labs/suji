
// Global namespaces
if (typeof(App) === 'undefined') App = {};

Meteor.startup(function () {

  // setup Internationalization
  I18n.init();
  I18n.loadLanguage("en", 'I18n_data_en');
  I18n.loadLanguage("ko", 'I18n_data_ko');
  I18n.loadLanguage("en", 'I18n_errors_en', 'errors');
  I18n.loadLanguage("ko", 'I18n_errors_ko', 'errors');
  I18n.loadLanguage("en", 'I18n_accounts_ui_en', 'accounts-ui');
  I18n.loadLanguage("ko", 'I18n_accounts_ui_ko', 'accounts-ui');
  I18n.setLanguage("ko");

  // I18n alias for JSX
  L = (key, args, lang) => I18n.get(key, args, lang);

});


