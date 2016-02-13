
const { History } = ReactRouter;

Post.ListContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getDefaultProps() {
    return {
      pagination: new ReactiveVar({
        increment: 20,
        limit: 20,
        sort: {
          field: 'createdAt',
          value: -1
        }
      }),
      search: new ReactiveVar({
        options: [
          { field: 'category.title', title: 'label_category' },
          { field: 'title', title: 'label_title' },
          { field: 'author.name', title: 'label_author' },
        ],
      })
    }
  },

  getMeteorData() {
    const pagination = this.props.pagination;
    const limit = pagination.get().limit;
    const sort = {};
    sort[pagination.get().sort.field] = pagination.get().sort.value;

    const search = this.props.search;
    const query = {
      field: search.get().field,
      text: search.get().text,
    };


    const handle = Meteor.subscribe('postsList', query, { limit, sort });

    const postsCount = Counts.get('postsListCount');

    let findQuery = {};
    if (query && query.field) {
      findQuery[query.field] = searchRegExp(query.text);
    }

    const posts = Post.collection.find(findQuery, { limit, sort })
      .map((post) => {
        if (post.category._id) {
          post.category = Category.collection.findOne(post.category._id);
        }
        return post;
    });

    return {
      loading: (! handle.ready()),
      postsCount,
      posts,
      pagination,
      search,
    }
  },

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

  render() {
    return (
      <Post.List {...this.data} />
    )
  }
});