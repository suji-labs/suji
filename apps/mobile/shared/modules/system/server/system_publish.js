
Meteor.publish('system', (id) => {
  check(id, String);

  return System.collection.find({ _id: id }, { fields: { apiSecret: 0 }});
});
