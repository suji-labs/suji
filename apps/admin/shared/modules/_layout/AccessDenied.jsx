
const { Link } = ReactRouter;

App.AccessDenied = React.createClass({
  handleSignOut() {
    Meteor.logout();
    window.location.href = '/';
  },

  render() {
    return (
      <App.Page>
        <header>
          <h3>{L('label_page_access_denied')}</h3>
        </header>

        <section className="board">
          <div className="panel panel-default">
            <div className="panel-body">
              <p>{L('text_page_access_denied')}</p>
            </div>

            <div className="panel-footer">
              <button className="btn btn-default pull-right"
                      onClick={this.handleSignOut}>
                {L('label_sign_in_again')}
              </button>

              <Link to="/" className="btn btn-primary pull-right">
                {L('label_go_home')}
              </Link>
            </div>
          </div>
        </section>
      </App.Page>
    )
  }
});
