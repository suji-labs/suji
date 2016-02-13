
Post.NewContainer = React.createClass({
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
      <Post.Form errors={this.state.errors}
                 onSubmit={this.handleSubmit}
                 onCancel={this.handleCancel} />
    )
  }
});
