Meteor.publish('categoriesList', function() {

  const query = { active: true };
  const options = { sort: { seq: 1 }};

  return Category.collection.find(query, options);
});

Meteor.publish('categoryView', function(categoryId) {
  check(categoryId, String);

  return Category.collection.find({ _id: categoryId, active: true });
});