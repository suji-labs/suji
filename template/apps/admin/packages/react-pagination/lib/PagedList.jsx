
const { PureRenderMixin } = React.addons;

Pagination.List = React.createClass({
  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: '',
      listTotal: 0,
      listLength: 0,
      pagination: null,
      loading: true,
      loadMore: 'Load more...',
      scrollPos: new ReactiveVar(0),
    }
  },

  resetState() {
    this.props.scrollPos.set(0);
    const pagination = this.props.pagination.get();
    pagination.limit = pagination.increment;
    this.props.pagination.set(pagination);
  },

  handleLoadMore() {
    if (this.props.pagination) {
      const object = this.props.pagination.get();

      object.limit += object.increment;

      this.props.pagination.set(object);
    }
  },

  componentWillMount() {
    if (! this.props.restoreState) {
      this.resetState();
    }
  },

  componentDidMount() {
    Meteor.setTimeout(() => {
      $(this.refs.list).parent().scrollTop(this.props.scrollPos.get());
    }, 300);
  },

  componentWillUnmount() {
    const scrollTop = $(this.refs.list).parent().scrollTop();
    this.props.scrollPos.set(scrollTop);
  },

  render() {
    return (
      <div className={this.props.className} ref="list">
        {this.props.children}

        <Pagination.LoadMore show={this.props.listTotal > this.props.listLength}
                             loading={this.props.loading}
                             onClick={this.handleLoadMore}>
          {this.props.loadMore}
        </Pagination.LoadMore>
      </div>
    )
  }

});
