
if (typeof Admin === 'undefined') Admin = {};

Meteor.methods({
  adminInsert(admin) {
    // check permission
    permissionCheck(this.userId, ['super-admin', 'manage-accounts']);

    // validate input variables
    Admin.Match.insert(admin);

    const data = {
      username: admin.username,
      password: admin.password,
      profile: {
        name: admin.name,
        isAdmin: true
      }
    };

    return Accounts.createUser(data);
  },

  adminUpdatePassword(admin) {
    if (this.isSimulation) return;

    // check permission
    permissionCheck(this.userId, ['super-admin', 'manage-accounts']);

    // validate input variables
    Admin.Match.updatePassword(admin);

    return Accounts.setPassword(admin._id, admin.password);
  },

  adminUpdateName(admin) {
    if (this.isSimulation) return;

    // check permission
    permissionCheck(this.userId, ['super-admin', 'manage-accounts']);

    // validate input variables
    Admin.Match.updateName(admin);

    return Meteor.users.update({ _id: admin._id},
      { $set: { 'profile.name': admin.name }});
  },

  adminUpdateRoles(userId, roles) {
    if (this.isSimulation) return;

    // check permission
    permissionCheck(this.userId, ['super-admin', 'manage-accounts']);

    // validate input variables
    check(userId, String);
    check(roles, Match.Optional([String]));

    return Roles.setUserRoles(userId, roles);
  }
});
