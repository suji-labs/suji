Meteor.publish("menu", function() {
  return Menu.find({});
});
