
Category.EditContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(title, seq) {
    const category = { title, seq };

    const validation = Category.Validator.validateUpdate(category);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    const self = this;
    Meteor.call('categoryUpdate', this.props.category._id, category, (error) => {
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
    const category = this.props.category;

    return (
      <Category.Form category={category}
                 errors={this.state.errors}
                 onSubmit={this.handleSubmit}
                 onCancel={this.handleCancel} />
    )
  }
});
