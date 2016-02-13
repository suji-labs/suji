

Accounts.ui.Popup = React.createClass({
  getInitialState() {
    return {
      view: 'sign-in'
    }
  },

  moveTo(view) {
    this.setState({ view })
  },

  render() {
    const props = _.extend({ moveTo: this.moveTo }, this.props);

    switch (this.state.view) {
      case 'sign-in':
        return <Accounts.ui.SignInContainer {...props} />;

      case 'sign-up':
        return <Accounts.ui.SignUpContainer {...props} />;

      case 'forgot-password':
        return <Accounts.ui.ForgotPasswordContainer {...props} />;
    }

    return null;
  }
});
