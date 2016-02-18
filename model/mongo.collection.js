/**
 * Created by 보운 on 2016-02-12.
 */

Menu = new Mongo.Collection("menu");
Category = new Mongo.Collection("category");
Purchase = new Mongo.Collection("purchase");
Bell = new Mongo.Collection("bell");

Menu.allow({
    insert: function (userId, item) {
        return true;
    },
    remove: function (userId, item) {
        return true;
    }
});

Category.allow({
    insert: function (userId, item) {
        return true;
    },
    remove: function (userId, item) {
        return true;
    }
});

Purchase.allow({
    insert: function (userId, item) {
        return true;
    },
    remove: function (userId, item) {
        return true;
    }
});

Purchase.allow({
    insert: function (userId, item) {
        return true;
    },
    remove: function (userId, item) {
        return true;
    }
});