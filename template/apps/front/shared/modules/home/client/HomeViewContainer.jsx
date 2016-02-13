
const { History } = ReactRouter;

Home.ViewContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  handleNewPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.NewContainer />, { className: 'slide-up' })
      .then((value) => {
        console.log('value = ' + value);
      });
  },

  getMeteorData() {
    const limit = 10;
    const sort = { createdAt: -1 };

    const handle = Meteor.subscribe('postsList', {}, { limit, sort });

    let posts, postsCount;
    Tracker.autorun(() => {
      postsCount = Counts.get('postsListCount');
      posts = Post.collection.find({}, { limit, sort }).fetch();
    });

    return {
      loading: (! handle.ready()),
      postsCount,
      posts,
    }
  },

  render() {
    return (
      <Home.View {...this.data} onNewPost={this.handleNewPost} />
    )
  }
});