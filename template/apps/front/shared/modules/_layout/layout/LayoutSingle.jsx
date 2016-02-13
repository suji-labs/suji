
App.LayoutSingle = React.createClass({

  render() {
    const path = this.props.location.pathname;

    return (
      <div id="layout-single" className="layout">
        <App.Header hideAccount={true} />

        <RouteTransition location={this.props.location}
                         component="main"
                         className="route-views">
          <div key={path} className="route-view">{this.props.children}</div>
        </RouteTransition>
      </div>
    )
  }
});
