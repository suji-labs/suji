Meteor.startup(function() {
  if(Products.find().count() === 0) {
    var products = [
      {
        'name': 'Tiramisu',
        'price': '15',
        'prime_cost': 5,
        'tax_mode': true,
        'barcode': null,
        'category': 'CAKE'
      },
      {
        'name': 'Espresso',
        'price': '10',
        'prime_cost': 2,
        'tax_mode': false,
        'barcode': null,
        'category': 'COFFEE'
      }
    ];
    products.forEach(function(product) {
      Products.insert(product);
    });
  }
});