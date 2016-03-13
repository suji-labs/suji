Meteor.publish("category", function(options, searchString) {
  if (!searchString) {
    searchString = '';
  }
  var searchFor = {
    '$regex': '.*' + (searchString || '') + '.*',
    '$options': 'i'
  };

  return Category.find({
      $or: [{
        categoryName: searchFor
      }]
    },
    options);
});
