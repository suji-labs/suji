
Admin.EditNameContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(name) {

    const admin = {
      _id: this.props.admin._id,
      name,
    };

    const validation = Admin.Validator.validateUpdateName(admin);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    const self = this;
    Meteor.call('adminUpdateName', admin, function(error) {
      if (error) {
        return Overlay.notify(error.reason);
      }

      return self.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    return (
      <Admin.FormName {...this.props} errors={this.state.errors}
                                      onSubmit={this.handleSubmit}
                                      onCancel={this.handleCancel} />
    )
  }
});
