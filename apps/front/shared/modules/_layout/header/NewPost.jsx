const { History } = ReactRouter;

NewPostButton = React.createClass({
  mixins: [History],

  onBack() {
    RouteTransition.goBack(this.history)
  },

  render() {
    return (
      <button id="back" className="btn btn-default" onClick={this.onBack}>
        <i className="fa fa-chevron-left"></i>
      </button>
    )
  }
});
