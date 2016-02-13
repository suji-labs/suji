const { Link } = ReactRouter;

const SignInButton = React.createClass({
  render() {
    return (
      <div className="account-info">
        <Link to="/sign-in" className="btn btn-info">
          {L('accounts-ui:label_sign_in')}
        </Link>
      </div>
    )
  }
});

const AccountInfo = React.createClass({
  render() {
    const username = userDisplayName(this.props.user);
    const pictureURL = userPictureURL(this.props.user);

    return (
      <div className="account-info">
        <Link to="/profile" className="info btn btn-link">
          <img className="picture" src={pictureURL} />
          <span className="name">{username}</span>
        </Link>
        <SignOutButton />
      </div>
    )
  }
});

App.AccountInfo = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },

  render() {
    return this.data.user ?
      <AccountInfo user={this.data.user} /> : <SignInButton />;
  }
});
