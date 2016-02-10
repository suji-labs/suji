'use strict'

Meteor.publish('products', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfProducts', Products.find(where), {noReady: true});
  return Products.find(where, options);
});
