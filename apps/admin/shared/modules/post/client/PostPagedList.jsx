
const { Link } = ReactRouter;

const PostListItem = React.createClass({
  render() {
    const post = this.props.post;
    if (! post) return null;
    const createdAt = moment(post.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr className="post-item">
        <td>{post._id}</td>
        <td>{post.category && post.category.title}</td>
        <td><Link to={`/post/edit/${post._id}`} >{post.title}</Link></td>
        <td>{post.author.name}</td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Post.PagedList = React.createClass({

  handleSort(field) {
    const object = this.props.pagination.get();

    if (field === object.sort.field) {
      object.sort.value *= -1;
    } else {
      object.sort = {
        field, value: -1
      }
    }

    this.props.pagination.set(object);
  },

  posts() {
    if (this.props.posts.length === 0) {
      return (
        <tr>
          <td key={'_'}
              colSpan="5"
              className="post-item">{L('text_no_posts')}</td>
        </tr>
      );
    }

    return this.props.posts.map((post) => (
      <PostListItem key={post._id} post={post} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_category'), field: 'category.title' },
      { title: L('label_title'), field: 'title' },
      { title: L('label_author'), field: 'author.name' },
      { title: L('label_created_at'), field: 'createdAt' },
    ];

    const sort = this.props.pagination.get().sort;

    return (
      <Pagination.List className="table-list"
                       listTotal={this.props.postsCount}
                       listLength={this.props.posts.length}
                       pagination={this.props.pagination}
                       loading={this.props.loading}
                       loadMore={L('label_load_more')} >
        <table className="table table-bordered table-striped">
          <thead>
            <App.TableHeadSort columns={columns}
                               sort={sort}
                               onSort={this.handleSort} />
          </thead>
          <tbody>
            {this.posts()}
          </tbody>
        </table>
      </Pagination.List>
    )
  }
});
