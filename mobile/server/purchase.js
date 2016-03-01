Meteor.publish("purchase", function(options, searchString) {
  if (!searchString) {
    searchString = '';
  }
  var searchFor = {
    '$regex': '.*' + (searchString || '') + '.*',
    '$options': 'i'
  };

  return Purchase.find({
      $or: [{
        name: searchFor
      }]
    },
    options);
});
