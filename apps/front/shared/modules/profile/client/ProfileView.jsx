
const { Link } = ReactRouter;

Profile.View = React.createClass({

  render() {
    const user = this.props.user;
    if (! user) return null;

    const profileName = (user.profile && user.profile.name) || L('text_no_name');

    return (
      <App.Page>

        <article className="page">

          <div className="picture">
            <Profile.PictureContainer user={user}
                                         cloudinary={this.props.cloudinary} />
          </div>

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
        </article>
      </App.Page>
    )
  }
});
