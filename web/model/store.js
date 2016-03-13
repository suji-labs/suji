/**
 * Created by 보운 on 2016-03-05.
 */

Store = new Mongo.Collection("store");

Store.allow({
    insert: function(userId, thing) {
        thing.createAt = new Date();
        return userId != null;
    },
    update: function(userId, thing, fields, modifier) {
        thing.createdAt = new Date();
        return true;
    },
    remove: function(userId) {
        return userId != null;
    }
});