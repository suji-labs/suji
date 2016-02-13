NavButton = React.createClass({

  handleClick() {
    App.LayoutMain.toggle();
  },

  render() {
    return (
      <button className="btn btn-default btn-header"
              onClick={this.handleClick}>
        <i className="fa fa-bars fa-2x fa-fw"></i>
      </button>
    )
  }
});

