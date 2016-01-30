
const { Link } = ReactRouter;

Post.List = React.createClass({
  render() {
    return (
      <App.Page>

        <header>
          <h3>{L('label_post')} <small>{L('label_list')}</small></h3>
        </header>

        <App.ListSearch countTotal={this.props.postsCount}
                        search={this.props.search} />

        <Post.PagedList {...this.props} />

      </App.Page>
    )
  }
});

