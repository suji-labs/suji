Meteor.publish("statistics", function() {
    return Purchase.find({});
});