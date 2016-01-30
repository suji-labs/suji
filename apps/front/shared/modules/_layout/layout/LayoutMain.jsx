
App.LayoutMain = React.createClass({
  statics: {
    toggle() {
      $('#layout-main').toggleClass('nav-main-on');
    },

    hide() {
      $('#layout-main').removeClass('nav-main-on');
    }
  },

  render() {
    const path = this.props.location.pathname;

    return (
      <div id="layout-main" className="layout">
        <App.Header />
        <App.NavMain />

        <RouteTransition location={this.props.location}
                         component="main"
                         className="route-views">
          <div key={path} className="route-view">{this.props.children}</div>
        </RouteTransition>

      </div>
    )
  }
});
