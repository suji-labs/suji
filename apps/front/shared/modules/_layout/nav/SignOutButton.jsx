const { History } = ReactRouter;

SignOutButton = React.createClass({
  mixins: [History],

  handleSignOut() {
    Meteor.logout();
    window.location.href = '/';
  },

  render() {
    return (
      <button className="btn btn-default btn-header"
              data-toggle="tooltip"
              data-placement="bottom"
              title={L('command_sign_out')}
              onClick={this.handleSignOut} >
        <i className="fa fa-sign-out"></i>
      </button>
    )
  }
});
