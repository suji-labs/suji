/**
 * accounts-ui package configuration
 */
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

// validate new user creation
Accounts.onCreateUser(function(options, user) {
  const validator = Account.Validator.validateInsertServer(options);
  if (validator.hasError()) {
    throw new Meteor.Error('validation error: new user');
  }

  if (options.profile) user.profile = options.profile;

  return user;
});


Accounts.onLogin(function(object) {
  Logger.info(`User "${object.user.profile.name}" sign-in succeeded`,
    { class: 'accounts' });
});

Accounts.onLoginFailure(function(object) {
  if (object.user && object.user.username) {
    Logger.info(`Admin user "${object.user.username}" sign-in failed`,
      { class: 'accounts' });
  }
});
