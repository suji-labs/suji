/**
 * accounts-ui package configuration
 */
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

// OAuth configuration
/*
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: '444697832401598',
      secret: '0313282fb61da038926fb575d53e82b2'
    }
  }
);
*/
/*
if (! ServiceConfiguration.configurations.findOne({ service: "facebook" })) {
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '444697832401598',
    secret: '0313282fb61da038926fb575d53e82b2'
  });
}
*/
// validate new user creation
Accounts.onCreateUser(function(options, user) {

  if (user.services.facebook) {
    console.log('onCreateUser facebook: ');

    const facebook = user.services.facebook;
    const picture = 'http://graph.facebook.com/' + facebook.id + '/picture?type=square&height=160&width=160';

    user.oauths = {
      facebook: {
        name: facebook.name,
        picture: picture
      }
    };

    user.profile = { name: facebook.name };
  } else {
    const validator = Account.Validator.validateInsert(options);
    if (validator.hasError()) {
      throw new Meteor.Error('validation error: new user');
    }

    if (options.profile) user.profile = options.profile;
  }

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
