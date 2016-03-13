/**
 * Created by 보운 on 2016-03-05.
 */

Meteor.publish("store", function() {
    return Store.find({});
});