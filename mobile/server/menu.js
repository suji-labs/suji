Meteor.publish("menu", function(options, searchString) {
  if (!searchString) {
    searchString = '';
  }
  var searchFor = {
    '$regex': '.*' + (searchString || '') + '.*',
    '$options': 'i'
  };

  return Menu.find({
      $or: [{
        categoryName: searchFor
      }]
    },
    options);
});