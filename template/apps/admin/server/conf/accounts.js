/**
 * accounts-ui package configuration
 */
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

// validate new user creation
Accounts.onCreateUser(function(options, user) {
  const validator = (options.profile && options.profile.isAdmin) ?
    Account.Validator.validateInsertAdmin(options) :
    Account.Validator.validateInsert(options);

  if (validator.hasError()) {
    throw new Meteor.Error('validation error: new user');
  }

  if (options.profile) user.profile = options.profile;

  return user;
});

Accounts.onLogin(function(object) {
  Logger.info(`Admin user "${object.user.username}" sign-in succeeded`,
    { class: 'accounts' });
});

Accounts.onLoginFailure(function(object) {
  if (object.user && object.user.username) {
    Logger.info(`Admin user "${object.user.username}" sign-in failed`,
      { class: 'accounts' });
  }
});
