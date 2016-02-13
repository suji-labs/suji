
Post.List = React.createClass({

  render() {
    const loadMore = this.props.postsCount > this.props.posts.length ?
      <App.LoadMore loading={this.props.onLoading}
                    onClick={this.props.onLoadMore} /> : null;

    return (
      <App.Page>
        <header>
          <h3>{L('label_post')} <small>{L('label_list')}</small></h3>

          <div className="actions">
            <button className="btn btn-primary pull-right"
                    onClick={this.props.onNewPost}>
              {L('label_new_post')}
            </button>
          </div>
        </header>

        <Post.PagedList {...this.props} />

        {loadMore}

      </App.Page>
    )
  }
});
