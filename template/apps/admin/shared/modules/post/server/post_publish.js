Meteor.publish('postsList', function(query, options) {
  check(query, {
    field: Match.Optional(String),
    text: Match.Optional(String),
  });
  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'category.title': Match.Optional(Number),
      'title': Match.Optional(Number),
      'author.name': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  let findQuery = {};
  if (! _.isEmpty(query)) {
    findQuery[query.field] = searchRegExp(query.text);
  }

  Counts.publish(this, 'postsListCount',
    Post.collection.find(findQuery), { noReady: true });

  const posts = Post.collection.find(findQuery, options);

  const categories = Category.collection.find();

  return [posts, categories];
});

/**
 * used for Post.Edit
 */
Meteor.publish('postView', (postId) => {
  check(postId, String);

  const categories = Category.collection.find({ active: true }, { sort: { seq: 1 }});

  const posts = Post.collection.find({ _id: postId });

  return [categories, posts];
});