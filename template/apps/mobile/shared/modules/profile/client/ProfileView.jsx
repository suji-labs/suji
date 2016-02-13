
const { Link } = ReactRouter;

const PasswordProfile = React.createClass({
  render() {
    const user = this.props.user;
    if (! user) return null;

    const profileName = (user.profile && user.profile.name) || L('text_no_name');

    return (
      <div className="list bordered">
        <Link to="/profile/edit/email" className="list-item">
          <div className="key">
            {L('label_email')}
          </div>
          <div className="value">
            <p>{user.emails[0].address}</p>
            <i className="fa fa-angle-right"></i>
          </div>
        </Link>

        <Link to="/profile/edit/password" className="list-item">
          <div className="key">
            {L('label_password')}
          </div>
          <div className="value">
            <p>&nbsp;</p>
            <i className="fa fa-angle-right"></i>
          </div>
        </Link>

        <Link to="/profile/edit/name" className="list-item">
          <div className="key">
            {L('label_name')}
          </div>
          <div className="value">
            <p>{profileName}</p>
            <i className="fa fa-angle-right"></i>
          </div>
        </Link>

      </div>

    )
  }
});

const FacebookProfile = React.createClass({
  render() {
    const user = this.props.user;

    return (
      <div className="list bordered">
        <div className="list-item">
          <div className="key">
            Facebook
          </div>
          <div className="value">
            <p>{user.profile.name}</p>
          </div>
        </div>
      </div>
    )
  }
});

Profile.View = React.createClass({

  renderFooter() {
    return (
      <App.Footer >
        <button className="btn btn-primary btn-lg btn-block"
                onClick={this.props.onSignOut}>
          {L('command_sign_out')}
        </button>
      </App.Footer>
    )
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    const user = this.props.user;

    const profile = (user.oauths && user.oauths.facebook) ? (
      <FacebookProfile user={user} />
    ) : (
      <PasswordProfile user={user} />
    );

    return (
      <App.Page title={L('label_profile')} >

          <div className="picture">
            <Profile.PictureContainer user={user}
                                      cloudinary={this.props.cloudinary} />
          </div>

          {profile}

      </App.Page>
    )
  }

});
