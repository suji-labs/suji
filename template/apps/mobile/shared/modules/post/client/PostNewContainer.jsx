
Post.NewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const limit = 100;
    const sort = { seq: 1 };
    const handle = Meteor.subscribe('categoriesList', { active: true }, { limit, sort });

    const categories = Category.collection.find({ active: true }, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      categories,
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
        type: 'text',
        data: content
      }
    };

    const validation = Post.Validator.validateInsert(post);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    const self = this;
    Meteor.call('postInsert', post, (error) => {
      if (error) return self.props.reject(-1);

      return self.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    return (
      <Post.Form {...this.data} errors={this.state.errors}
                                onSubmit={this.handleSubmit}
                                onCancel={this.handleCancel} />
    )
  }
});
