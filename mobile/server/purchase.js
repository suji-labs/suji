Meteor.publish("purchase", function(query, options) {
  //if (!searchString) {
  //  searchString = '';
  //}
  //var searchFor = {
  //  '$regex': '.*' + (searchString || '') + '.*',
  //  '$options': 'i'
  //};
  //
  //return Purchase.find({
  //    $or: [{
  //      name: searchFor
  //    }]
  //  },
  //  options);
  return Purchase.find(query, options);
});