
const { Link } = ReactRouter;

App.NotFound = React.createClass({
  render() {
    return (
      <App.Page {...this.props}>
        <header>
          <h3>{L('label_page_not_found')}</h3>
        </header>

        <section className="board">
          <div className="panel panel-default">
            <div className="panel-body">
              <p>{L('text_page_not_found')}</p>
            </div>

            <div className="panel-footer">
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
