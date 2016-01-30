
Accounts.ui = {
  _options: {
    requestPermissions: {},
    requestOfflineToken: {},
    forceApprovalPrompt: {}
  },

  config(options) {
    // validate options keys
    const VALID_KEYS = [
      'passwordSignupFields',
      'requestPermissions',
      'requestOfflineToken',
      'forceApprovalPrompt'
    ];

    _.each(_.keys(options), (key) => {
      if (!_.contains(VALID_KEYS, key))
        throw new Error("Accounts.ui.config: Invalid key: " + key);
    });

    // deal with `passwordSignupFields`
    if (options.passwordSignupFields) {
      if (_.contains([
          "USERNAME_AND_EMAIL",
          "USERNAME_AND_OPTIONAL_EMAIL",
          "USERNAME_ONLY",
          "EMAIL_ONLY"
        ], options.passwordSignupFields)) {
        if (Accounts.ui._options.passwordSignupFields)
          throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");
        else
          Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;
      } else {
        throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);
      }
    }

    // deal with `requestPermissions`
    if (options.requestPermissions) {
      _.each(options.requestPermissions, (scope, service) => {
        if (Accounts.ui._options.requestPermissions[service]) {
          throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);
        } else if (!(scope instanceof Array)) {
          throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");
        } else {
          Accounts.ui._options.requestPermissions[service] = scope;
        }
      });
    }

    // deal with `requestOfflineToken`
    if (options.requestOfflineToken) {
      _.each(options.requestOfflineToken, (value, service) => {
        if (service !== 'google')
          throw new Error("Accounts.ui.config: `requestOfflineToken` only supported for Google login at the moment.");

        if (Accounts.ui._options.requestOfflineToken[service]) {
          throw new Error("Accounts.ui.config: Can't set `requestOfflineToken` more than once for " + service);
        } else {
          Accounts.ui._options.requestOfflineToken[service] = value;
        }
      });
    }

    // deal with `forceApprovalPrompt`
    if (options.forceApprovalPrompt) {
      _.each(options.forceApprovalPrompt, (value, service) => {
        if (service !== 'google')
          throw new Error("Accounts.ui.config: `forceApprovalPrompt` only supported for Google login at the moment.");

        if (Accounts.ui._options.forceApprovalPrompt[service]) {
          throw new Error("Accounts.ui.config: Can't set `forceApprovalPrompt` more than once for " + service);
        } else {
          Accounts.ui._options.forceApprovalPrompt[service] = value;
        }
      });
    }
  },

  passwordSignupFields() {
    return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";
  },

  page(element) {
    return Overlay.page(element);
  },

  // returns an array of the OAuth sign-in services used by this app.
  //
  // don't cache the output of this function: if called during startup (before
  // oauth packages load) it might not include them all.
  //
  getOAuthServices() {
    // First look for OAuth services.
    const services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];

    // Be equally kind to all sign-in services. This also preserves
    // backwards-compatibility. (But maybe order should be configurable?)
    services.sort();

    return services;
  },

  hasPasswordService() {
    return !! Package['accounts-password'];
  },

  signInOtherService(serviceName, callback) {
    if (! serviceName) return;

    // XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js
    const capitalize = function(str) {
      str = str == null ? '' : String(str);
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // XXX Service providers should be able to specify their
    // `Meteor.loginWithX` method name.
    const loginWithService = Meteor["loginWith" +
      (serviceName === 'meteor-developer' ?
        'MeteorDeveloperAccount' : capitalize(serviceName))];

    const options = {}; // use default scope unless specified
    if (Accounts.ui._options.requestPermissions[serviceName])
      options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
    if (Accounts.ui._options.requestOfflineToken[serviceName])
      options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
    if (Accounts.ui._options.forceApprovalPrompt[serviceName])
      options.forceApprovalPrompt = Accounts.ui._options.forceApprovalPrompt[serviceName];

    loginWithService(options, (error) => {
      const $loadingIcon = $('.loading-icon');
      const $serviceIcon = $('.service-icon');
      $loadingIcon.addClass('hidden');
      $serviceIcon.removeClass('hidden');

      console.log('loginWithService error:');
      console.log(error);

      if (! error) {
        console.log('sign-in success');
        if (typeof callback === 'function') callback();
      } else if (error instanceof Accounts.LoginCancelledError) {
        // do nothing
        callback(error);
      } else if (error instanceof ServiceConfiguration.ConfigError) {
        callback(error);
      } else {
        const msg = error.reason || "error_unknown";

        if (error.details && error.details.email) {

          Overlay.confirm(email + msg + '해당 Email 주소로 로그인하시겠습니까?').then((result) => {
            if (result) {
              $('#login-username-or-email').val(email);
              $('#login-password').focus();
              return;
            }
          });
        } else {
          callback("accounts-ui:" + msg);
        }
      }
    });
  }

};
