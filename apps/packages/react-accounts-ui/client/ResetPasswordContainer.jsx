
Accounts.ui.ResetPasswordContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(password) {
    const token = this.props.params.token;

    Accounts.resetPassword(token, password, (error) => {
      if (error) {
        this.setState({ errors: [error.reason] });
        return Overlay.notify(error.reason);
      }

      Overlay.notify('new password set successfully.');
    });
  },

  render() {
    console.log(this.props.params.token);

    return <Accounts.ui.ResetPassword onSubmit={this.handleSubmit}
                                      errors={this.state.errors} />
  }
});
