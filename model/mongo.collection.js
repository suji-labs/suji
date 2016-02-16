/**
 * Created by 보운 on 2016-02-12.
 */

Menu = new Mongo.Collection("menu");
Category = new Mongo.Collection("category");
Purchase = new Mongo.Collection("purchase");

Menu.allow({
    insert: function (userId, item) {
        return userId && item.owner === userId;
    },
    update: function (userId, item, fields, modifier) {
        return userId && item.owner === userId;
    },
    remove: function (userId, item) {
        return userId && item.owner === userId;
    }
});

Category.allow({
    insert: function (userId, item) {
        return userId && item.owner === userId;
    },
    remove: function (userId, item) {
        return userId && item.owner === userId;
    }
});

Purchase.allow({
    remove: function (userId, item) {
        return userId && item.owner === userId;
    }
});