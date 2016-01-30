
const { History } = ReactRouter;

Accounts.ui.SignInContainer = React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(user, password) {
    const errors = [];
    if (_.isEmpty(user)) errors.push('error_user_required');
    if (_.isEmpty(password)) errors.push('error_password_required');
    this.setState({ errors });
    if (errors.length > 0) return;

    const self = this;
    Meteor.loginWithPassword(user, password, (error) => {
      if (error) {
        self.setState({ errors: [error] });
      } else {
        console.log('sign-in success');

        const { location } = self.props

        if (location && location.state && location.state.nextPathname) {
          self.history.replaceState(null, location.state.nextPathname)
        } else {
          self.history.replaceState(null, '/')
        }
        console.log('history state replace');
      }
    });
  },

  handleOAuth(name) {
    const self = this;
    Accounts.ui.signInOtherService(name, (error) => {
      if (error) {
        self.setState({ errors: [error] });
      } else {
        console.log('sign-in success');

        const { location } = self.props

        if (location && location.state && location.state.nextPathname) {
          self.history.replaceState(null, location.state.nextPathname)
        } else {
          self.history.replaceState(null, '/')
        }
        console.log('history state replace');
      }
    });
  },

  handleConfigure(name) {
    alert('configure OAuth Service: ' + name);
  },

  render() {
    return <Accounts.ui.SignIn errors={this.state.errors}
                               handleSubmit={this.handleSubmit}
                               handleOAuth={this.handleOAuth}
                               handleConfigure={this.handleConfigure} />
  }
});
