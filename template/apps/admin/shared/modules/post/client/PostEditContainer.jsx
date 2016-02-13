
const { History } = ReactRouter;

Post.EditContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const postId = this.props.params.id;
    const handle = Meteor.subscribe('postView', postId);

    return {
      loading: (! handle.ready()),
      categories: Category.collection.find({ active: true }, { sort: { seq: 1 }}).fetch(),
      post: Post.collection.findOne(postId),
      mode: 'edit',
    }
  },

  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(categoryId, title, content) {
    const category = Category.collection.findOne(categoryId);

    const postId = this.data.post._id;
    const post = {
      category: {
        _id: categoryId,
        title: category.title
      },
      title,
      content: {
        version: '0.0.1',
        type: 'text',
        data: content
      }
    };

    const validation = Post.Validator.validateUpdate(post);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    Meteor.call('postUpdate', postId, post, (error) => {
      if (error) return Overlay.notify(error.reason);

      Overlay.notify(L('text_post_update_done'));
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
