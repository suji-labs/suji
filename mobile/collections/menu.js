Menu = new Mongo.Collection("menu");

Menu.allow({
    insert: function(userId, thing) {
        thing.createAt = new Date();
        return true;
    },
    update: function(userId, thing, fields, modifier) {
        thing.createdAt = new Date();
        return true;
    },
    remove: function(userId) {
        return true;
    }
});
