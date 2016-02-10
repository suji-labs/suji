Products = new Mongo.Collection('products');

Products.allow({
  insert: function(userId, product) {
    return true;
  },
  update: function(userId, product, fields, modifier) {
    return true;
  },
  remove: function(userId, product) {
    return true;
  }
});