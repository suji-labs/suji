Meteor.publish("purchase", function() {
    return Purchase.find({});
});