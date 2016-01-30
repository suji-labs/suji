
const { Link } = ReactRouter;

Admin.View = React.createClass({
  render() {
    if (this.props.loading) return <App.Spinner />;

    const admin = this.props.admin;
    const roles = admin.roles && admin.roles.map((value, i) => {
      return <span key={i}>{value}</span>;
    });

    return (
      <App.Page>
        <header>
          <h3>
            {L('label_admin')} <small>{L('label_view')}</small>
          </h3>
        </header>

        <section className="view-frame">
          <div className="list bordered striped">
            <div className="item">
              <p className="key">{L('label_id')}</p>
              <p className="value">{admin._id}</p>
            </div>
            <div className="item">
              <p className="key">{L('label_username')}</p>
              <p className="value">{admin.username}</p>
            </div>
            <div className="item">
              <p className="key">{L('label_password')}</p>
              <p className="value">&bull;&bull;&bull;&bull;&bull;&bull;</p>
              <button className="btn btn-info btn-xs"
                      onClick={this.props.onUpdatePassword}>
                {L('label_modify')}</button>
            </div>
            <div className="item">
              <p className="key">{L('label_name')}</p>
              <p className="value">{admin.profile.name}</p>
              <button className="btn btn-info btn-xs"
                      onClick={this.props.onUpdateName}>
                {L('label_modify')}</button>
            </div>
            <div className="item">
              <p className="key">{L('label_role')}</p>
              <p className="value array">{roles}</p>
              <button className="btn btn-info btn-xs"
                      onClick={this.props.onUpdateRoles}>
                {L('label_modify')}</button>
            </div>
          </div>
        </section>

        <section className="actions-frame">
          <Link to="/admins" className="btn btn-default pull-right">
            {L('label_list')}
          </Link>
        </section>
      </App.Page>
    )
  }
});