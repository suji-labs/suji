Meteor.startup(function() {
  if(Products.find().count() === 0) {
    var products = [
      {
        'name': 'product 1'
      },
      {
        'name': 'product 2'
      }
    ];
    products.forEach(function(product) {
      Products.insert(product);
    });
  }
});