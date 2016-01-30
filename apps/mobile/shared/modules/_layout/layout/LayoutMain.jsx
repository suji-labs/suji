
App.LayoutMain = React.createClass({
  statics: {
    toggle() {
      $('#layout-main').toggleClass('nav-main-on');
      /*
       const container = document.getElementById('layout-main');
       container.className = (container.className) ? '' : 'aside-left-on';
       */
    },

    hide() {
      $('#layout-main').removeClass('nav-main-on');
      //document.getElementById('layout-main').className = '';
    }
  },

  getInitialState() {
    return {
      navOn: false
    }
  },

  render() {
    const path = this.props.location.pathname;

    return (
      <div id="layout-main" className="layout" ref="layout-main">
        <RouteTransition location={this.props.location}
                         component="main"
                         className="route-views">
          <div key={path} className="route-view">{this.props.children}</div>
        </RouteTransition>

        <App.NavMain />
      </div>
    )
  }
});
