
const { History } = ReactRouter;

Category.ViewContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const query = { 'category._id': this.props.params.id };

    const limit = this.pagination.get().limit;
    const sort = {};
    sort[this.pagination.get().sort.field] = this.pagination.get().sort.value;

    const handle = Meteor.subscribe('postsList', query, { limit, sort });

    const category = Category.collection.findOne(this.props.params.id);
    const postsCount = Counts.get('postsListCount');
    const posts = Post.collection.find(query, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      category,
      postsCount,
      posts,
      pagination: this.pagination.get(),
    }
  },

  pagination: new ReactiveVar({
    increment: 30,
    limit: 30,
    sort: {
      field: 'createdAt',
      value: -1
    }
  }),

  handleLoadMore() {
    const object = this.pagination.get();

    object.limit += object.increment;
    this.pagination.set(object);
  },

  handleNewPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.NewContainer />)
      .then((value) => {
        console.log('value = ' + value);
      });
  },

  render() {
    return (
      <Category.View {...this.data} onLoadMore={this.handleLoadMore} />
    )
  }
});