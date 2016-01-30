Meteor.publish('accountsList', function(query, options) {
  check(query, {
    field: Match.Optional(String),
    text: Match.Optional(String),
  });
  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'emails.address': Match.Optional(Number),
      'profile.name': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  let findQuery = {};
  if (! _.isEmpty(query)) {
    findQuery[query.field] = searchRegExp(query.text);
  }
  findQuery = _.extend({ 'profile.isAdmin': { $ne: true }}, findQuery);

  Counts.publish(this, 'accountsListCount',
    Meteor.users.find(findQuery), { noReady: true });

  return Meteor.users.find(findQuery, options);
});

Meteor.publish('accountView', (accountId) => {
  check(accountId, String);

  return Meteor.users.find({ _id: accountId, 'profile.isAdmin': { $ne: true }});
});

