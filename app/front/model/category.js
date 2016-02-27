Category = new Mongo.Collection("category");

Category.allow({
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