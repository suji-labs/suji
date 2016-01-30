
const LoadMoreButton = React.createClass({
  render() {
    return (
      <button className="btn btn-default btn-block" onClick={this.props.onClick}>
        {L('label_load_more')}
      </button>
    )
  }
});

/**
 * props:
 *    loading
 *    onClick
 */
App.LoadMore = React.createClass({
  scrollHandle: null,
  onProcess: false,

  componentDidMount() {
    this.scrollHandle = InfiniteScrollTrigger.bind(() => {
      if (! this.onProcess) {
        this.onProcess = true;
        this.props.onClick();
        this.onProcess = false;
      }
    });
  },

  componentWillUnmount() {
    if (this.scrollHandle) InfiniteScrollTrigger.unbind(this.scrollHandle);
  },

  render() {
    const element = this.props.loading ? <App.LoadMoreSpinner /> :
      <LoadMoreButton onClick={this.props.onClick} />;

    return (
      <div className="load-more">
        {element}
      </div>
    )
  }
});