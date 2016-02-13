
const { History } = ReactRouter;

Accounts.ui.ChangePasswordContainer = React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(oldPassword, newPassword) {
    Accounts.changePassword(oldPassword, newPassword, (error) => {
      if (error) {
        this.setState({ errors: [error.reason] });
        return Overlay.notify(error.reason);
      }

      this.props.onChanged();
    });
  },

  render() {
    return <Accounts.ui.ChangePassword onSubmit={this.handleSubmit}
                                       errors={this.state.errors} />
  }
});
