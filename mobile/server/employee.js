Meteor.publish("employee", function(options, searchString) {
  if (!searchString) {
    searchString = '';
  }
  var searchFor = {
    '$regex': '.*' + (searchString || '') + '.*',
    '$options': 'i'
  };

  return Employee.find({
        $or: [{
          name: searchFor
        }]
    },
    options);
});
