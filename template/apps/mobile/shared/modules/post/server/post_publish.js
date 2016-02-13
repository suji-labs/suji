Meteor.publish('postsList', function(query, options) {
  check(query, {
    'category._id': Match.Optional(String)
  });

  check(options, {
    limit: Number,
    sort: {
      createdAt: Match.Optional(Number)
    }
  });

  Counts.publish(this, 'postsListCount', Post.collection.find(query), { noReady: true });

  const categories = Category.collection.find(
    { _id: query['category._id'], active: true }
  );
  const posts = Post.collection.find(query, options);

  return [categories, posts];
});

Meteor.publish('postView', (postId) => {
  return Post.collection.find({ _id: postId });
});