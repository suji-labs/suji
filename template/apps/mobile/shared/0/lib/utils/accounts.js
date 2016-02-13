
userDisplayName = function(user) {
  if (typeof user === 'undefined') return '';

  if (user) {
    if (user.oauths && user.oauths.facebook) {
      return  user.oauths.facebook.name;
    }

    if (user.profile && user.profile.name) return user.profile.name;

    if (user.username) return user.username;

    if (user.emails && user.emails[0]) return user.emails[0].address;
  }

  return '';
};


userPictureURL = function(user) {
  let url;
  if (user) {
    if (user.oauths && user.oauths.facebook) {
      return user.oauths.facebook.picture;
    }

    url = user.profile && user.profile.picture &&
      user.profile.picture.url;
  }

  return url ? url : DEFAULT_PICTURE_URL;
};
