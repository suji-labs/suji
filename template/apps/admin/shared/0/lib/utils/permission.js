
/**
 *
 * @param userId
 * @param roles string or array of role-name
 */
permissionCheck = function(userId, roles) {
  if (! Roles.userIsInRole(userId, roles)) {
    throw new Meteor.Error(403, 'error_permission_fail');
  }
};
