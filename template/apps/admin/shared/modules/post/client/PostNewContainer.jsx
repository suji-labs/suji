
const { History } = ReactRouter;

Post.NewContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const limit = 100;
    const sort = { seq: 1 };
    const handle = Meteor.subscribe('categoriesList', { active: true }, { limit, sort });

    const categories = Category.collection.find({ active: true }, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      categories,
      mode: 'new',
    }
  },

  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(categoryId, title, content) {
    const category = Category.collection.findOne(categoryId);

    const post = {
      category: {
        _id: categoryId,
        title: category.title,
      },
      title,
      content: {
        version: '0.0.1',
        type: 'markdown',
        data: content
      }
    };

    const validation = Post.Validator.validateInsert(post);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    Meteor.call('postInsert', post, (error) => {
      if (error) return Overlay.notify(error.reason);

      Overlay.notify(L('text_post_insert_done'));
      RouteTransition.goBack(this.history);
    });
  },

  handleCancel() {
    RouteTransition.goBack(this.history);
  },

  render() {
    return (
      <Post.Form {...this.data} errors={this.state.errors}
                                onSubmit={this.handleSubmit}
                                onCancel={this.handleCancel} />
    )
  }
});
