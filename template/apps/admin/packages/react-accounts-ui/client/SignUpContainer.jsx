
Accounts.ui.SignUpContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(username, email, password) {
    const user = { username, email, password };

    Accounts.createUser(user, (error) => {
      if (error) {
        console.log('user created error');
        console.log(error);
        this.setState({ errors: [error] });
      } else {
        Overlay.notify('user created');
        console.log('user created');
      }
    });
  },

  render() {
    return <Accounts.ui.SignUp onSubmit={this.handleSubmit}
                               errors={this.state.errors} />
  }
});
