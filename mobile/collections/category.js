Category = new Mongo.Collection('category');

Category.allow({
  insert: function(userId, thing) {
    thing.createdAt = new Date();
    return true;
  },
  update: function(userId, thing, fields, modifier) {
    thing.createdAt = new Date();
    return true;
  },
  remove: function(userId, thing) {
    return true;
  }
});