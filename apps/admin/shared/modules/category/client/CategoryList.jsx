
Category.List = React.createClass({
  render() {
    return (
      <App.Page>
        <header>
          <h3>{L('label_category')} <small>{L('label_list')}</small></h3>
          <div className="actions">
            <button className="btn btn-primary pull-right"
                    onClick={this.props.onNewCategory}>{L('label_new_category')}</button>
          </div>
        </header>

        <App.ListSearch countTotal={this.props.categoriesCount}
                        search={this.props.search} />

        <Category.PagedList {...this.props} onEdit={this.props.onEdit}
                                            onActive={this.props.onActive} />
      </App.Page>
    )
  }
});

