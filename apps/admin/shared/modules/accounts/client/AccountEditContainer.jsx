
const { History } = ReactRouter;

Account.EditContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const accountId = this.props.params.id;

    const handle = Meteor.subscribe('accountView', accountId);

    const account = Meteor.users.findOne(accountId);

    return {
      loading: (! handle.ready()),
      account,
    }
  },

  getInitialState() {
    return {
      errors: []
    }
  },

  goBack() {
    if (RouteTransition.canGoBack()) {
      RouteTransition.goBack(this.history, { restoreState: true });
    } else {
      this.history.pushState({ restoreState: true }, '/accounts');
    }
  },

  handleSubmit(email, password, name) {
    const account = {
      email,
      password,
      name,
    };

    const validation = Account.Validator.validateUpdate(account);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    Meteor.call('accountUpdate', this.data.account._id, account, (error) => {
      if (error) {
        return Overlay.notify(error.reason);
      }

      this.goBack();
    });
  },

  handleCancel() {
    this.goBack();
  },

  render() {
    return (
      <Account.Form {...this.data}
                    errors={this.state.errors}
                    onSubmit={this.handleSubmit}
                    onCancel={this.handleCancel} />
    )
  }
});
