
Admin.List = React.createClass({
  render() {
    return (
      <App.Page>
        <header>
          <h3>
            {L('label_admin')}
            <small>{L('label_list')}</small>
          </h3>

          <div className="actions">
            <button className="btn btn-primary pull-right"
                    onClick={this.props.onNewAdmin}>
              {L('label_new_admin')}
            </button>
          </div>
        </header>

        <App.ListSearch countTotal={this.props.adminsCount}
                        search={this.props.search} />

        <Admin.PagedList {...this.props} />

      </App.Page>
    )
  }
});

