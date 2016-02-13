
Post.EditContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(title, content) {
    console.log(title, content);

    const post = {
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

    const self = this;
    Meteor.call('postUpdate', this.props.post._id, post, (error) => {
      if (error) {
        Overlay.notify(error.reason);
        return self.props.reject(-1);
      }

      return self.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    const post = this.props.post;

    return (
      <Post.Form post={post}
                 errors={this.state.errors}
                 onSubmit={this.handleSubmit}
                 onCancel={this.handleCancel} />
    )
  }
});
