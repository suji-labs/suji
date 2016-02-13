const { History } = ReactRouter;

HomeButton = React.createClass({
  mixins: [History],

  onHome() {
    RouteTransition.goHome(this.history)
  },

  render() {
    return (
      <button className="btn btn-default btn-header" onClick={this.onHome}>
        <i className="fa fa-home fa-2x fa-fw"></i>
      </button>
    )
  }
});
