
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