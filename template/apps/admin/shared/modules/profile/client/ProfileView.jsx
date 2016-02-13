
const { Link } = ReactRouter;

Profile.View = React.createClass({

  render() {
    if (this.props.loading) return <App.Spinner />;

    const user = this.props.user;
    const profileName = (user.profile && user.profile.name) || L('text_no_name');

    return (
      <App.Page>

        <div className="picture">
          <Profile.PictureContainer user={user}
                                    cloudinary={this.props.cloudinary} />
        </div>

        <div className="list bordered">
          <div className="item">
            <div className="key">
              {L('label_username')}
            </div>
            <div className="value">
              <p>{user.username}</p>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>

          <Link to="/profile/edit/password" className="item">
            <div className="key">
              {L('label_password')}
            </div>
            <div className="value">
              <p>&nbsp;</p>
              <i className="fa fa-angle-right"></i>
            </div>
          </Link>

          <Link to="/profile/edit/name" className="item">
            <div className="key">
              {L('label_name')}
            </div>
            <div className="value">
              <p>{profileName}</p>
              <i className="fa fa-angle-right"></i>
            </div>
          </Link>

        </div>

      </App.Page>
    )
  }
});
