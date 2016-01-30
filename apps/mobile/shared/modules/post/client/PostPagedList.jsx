
const { Link } = ReactRouter;

const PostListItem = React.createClass({
  render() {
    const post = this.props.post;
    if (! post) return null;
    const createdAt = moment(post.createdAt).fromNow(); //.format('YYYY-MM-DD HH:mm');

    return (
      <div className="post-item">
        <Link to={`/post/view/${post._id}`} >
          <p className="title">{post.title}</p>
          <p className="info">
            <span className="author">{post.author.name}</span>
            <span className="datetime">{createdAt}</span>
          </p>
        </Link>
      </div>
    )
  }
});

Post.PagedList = React.createClass({
  scrollPos: new ReactiveVar(0),

  componentDidMount() {
    Meteor.setTimeout(() => {
      $(this.refs.list).parent().scrollTop(this.scrollPos.get());
    }, 300);
  },

  componentWillUnmount() {
    const scrollTop = $(this.refs.list).parent().scrollTop();
    this.scrollPos.set(scrollTop);
  },

  posts() {
    if (this.props.posts.length === 0) {
      return (<div key={'_'} className="post-item">{L('text_no_posts')}</div>);
    }

    return this.props.posts.map((post) => (
      <PostListItem key={post._id} post={post} />
    ));
  },

  render() {
    return (
      <div className="post-list" ref="list">
        {this.posts()}
      </div>
    )
  }
});
