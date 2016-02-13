
Admin.EditPasswordContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(password, passwordAgain) {
    if (password !== passwordAgain) {
      this.setState({ errors: [{
        attribute: 'password-again',
        messages: [L('error_password_again_fail')],
      }]});
      return;
    }

    const admin = {
      _id: this.props.adminId,
      password
    };

    const validation = Admin.Validator.validateUpdatePassword(admin);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    const self = this;
    Meteor.call('adminUpdatePassword', admin, function(error) {
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
      <Admin.FormPassword {...this.data} errors={this.state.errors}
                                         onSubmit={this.handleSubmit}
                                         onCancel={this.handleCancel} />
    )
  }
});
