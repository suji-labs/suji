Meteor.publish('userData', function() {

  return Meteor.users.find({ _id: this.userId }, {
    fields: {
      username: 1,
      emails: 1,
      profile: 1,
      oauths: 1,
      createdAt: 1,
    }
  })
});

