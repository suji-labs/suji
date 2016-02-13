
const LoadMoreButton = React.createClass({
  render() {
    return (
      <button className="btn btn-default btn-block"
              onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
});

/**
 * props:
 *    loading
 *    onClick
 */
Pagination.LoadMore = React.createClass({

  scrollHandle: null,

  onScroll: false,

  componentDidMount() {
    this.scrollHandle = InfiniteScrollTrigger.bind(() => {
      if (! this.onScroll) {
        this.onScroll = true;
        this.props.onClick();
        this.onScroll = false;
      }
    });
  },

  componentWillUnmount() {
    if (this.scrollHandle) InfiniteScrollTrigger.unbind(this.scrollHandle);
  },

  render() {
    if (! this.props.show) return null;

    const element = this.props.loading ? <Pagination.Spinner /> : (
      <LoadMoreButton onClick={this.props.onClick}>
        {this.props.children}</LoadMoreButton>
    );

    return (
      <div className="load-more">
        {element}
      </div>
    )
  }
});