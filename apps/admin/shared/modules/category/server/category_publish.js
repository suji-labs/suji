Meteor.publish('categoriesList', function(query, options) {
  check(query, {
    field: Match.Optional(String),
    text: Match.Optional(String),
  });

  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'title': Match.Optional(Number),
      'active': Match.Optional(Number),
      'seq': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  let findQuery = {};
  if (query && query.text) {
    findQuery[query.field] = searchRegExp(query.text);
  }

  Counts.publish(this, 'categoriesListCount',
    Category.collection.find(findQuery), { noReady: true });

  return Category.collection.find(findQuery, options);
});

