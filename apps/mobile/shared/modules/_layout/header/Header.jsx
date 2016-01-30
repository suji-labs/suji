
App.Header = React.createClass({
  getDefaultProps() {
    return {
      title: 'Page-Title'
    }
  },

  render() {
    return (
      <header>
        <div className="logo">{this.props.title}</div>
        <div className="header-left">
          {RouteTransition.canGoBack() ? <BackButton />: <NavButton />}
        </div>
        <div className="header-right">
          {RouteTransition.canGoBack() ? <HomeButton />: null }
        </div>
      </header>
    )
  }
});