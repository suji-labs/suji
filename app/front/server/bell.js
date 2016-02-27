Meteor.publish("bell", function(options, searchString) {
  if (!searchString) {
    searchString = '';
  }
  var searchFor = {
    '$regex': '.*' + (searchString || '') + '.*',
    '$options': 'i'
  };

  return Bell.find({
        $or: [{
          bellID: searchFor
        }]
    },
    options);
});
