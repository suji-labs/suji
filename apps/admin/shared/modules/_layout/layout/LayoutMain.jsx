
App.LayoutMain = React.createClass({
  statics: {
    toggle() {
      $('.layout').toggleClass('aside-left-on');
      //const container = document.getElementById('container');
      //container.className = (container.className) ? '' : 'aside-left-on';
    },

    hide() {
      $('.layout').removeClass('aside-left-on');
      //document.getElementById('container').className = '';
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
