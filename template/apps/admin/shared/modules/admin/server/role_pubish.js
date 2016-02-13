Meteor.publish('rolesList', function() {

  return Roles.getAllRoles();
});
