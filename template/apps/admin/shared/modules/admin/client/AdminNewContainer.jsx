
const { History } = ReactRouter;

Admin.NewContainer = React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(username, password, passwordAgain, name) {
    if (password !== passwordAgain) {
      this.setState({ errors: [{
        attribute: 'password-again',
        messages: [L('error_password_again_fail')],
      }]});
      return;
    }

    const admin = {
      username,
      password,
      name,
    };

    const validation = Admin.Validator.validateInsert(admin);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    Meteor.call('adminInsert', admin, (error) => {
      if (error) {
        return Overlay.notify(error.reason);
      }

      this.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    return (
      <Admin.Form errors={this.state.errors}
                  onSubmit={this.handleSubmit}
                  onCancel={this.handleCancel} />
    )
  }
});
