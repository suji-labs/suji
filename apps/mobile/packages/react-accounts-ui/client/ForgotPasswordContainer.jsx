
Accounts.ui.ForgotPasswordContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(email) {
    const errors = [];
    if (_.isEmpty(email)) errors.push('error_email_required');
    this.setState({ errors });
    if (errors.length > 0) return;

    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        return this.setState({ errors: [error.reason] });
      }

      Overlay.notify('email for reset password sent');
    });
  },

  render() {
    return <Accounts.ui.ForgotPassword onSubmit={this.handleSubmit}
                                       errors={this.state.errors}
                                       moveTo={this.props.moveTo} />
  }
});
