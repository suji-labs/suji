
Account.List = React.createClass({
  render() {
    return (
      <App.Page>
        <header>
          <h3>
            {L('label_account')}
            <small>{L('label_list')}</small>
          </h3>
        </header>

        <App.ListSearch countTotal={this.props.accountsCount}
                        search={this.props.search} />

        <Account.PagedList {...this.props} />

      </App.Page>
    )
  }
});

