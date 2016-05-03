Meteor.publish("purchase", function(query, options) {
  return Purchase.find(query, options);
});
