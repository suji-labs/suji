
Category.NewContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(title) {

    const category = { title };

    const validation = Category.Validator.validateInsert(category);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    const self = this;
    Meteor.call('categoryInsert', category, (error) => {
      if (error) return self.props.reject(-1);

      return self.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    return (
      <Category.Form errors={this.state.errors}
                     onSubmit={this.handleSubmit}
                     onCancel={this.handleCancel} />
    )
  }
});
