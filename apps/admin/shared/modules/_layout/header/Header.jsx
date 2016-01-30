const { Link } = ReactRouter;

App.Header = React.createClass({
  getDefaultProps() {
    return {
      hideAccount: false,
    }
  },

  renderLeft() {
    return (
      <div className="header-left">
        <NavButton />
      </div>
    )
  },

  render() {
    const accountButton = (!this.props.hideAccount) ?
      <App.AccountInfo /> : null;

    return (
      <header>
        {this.renderLeft()}

        <div className="logo">
          <Link to="/">
            <img src="/images/logo-inversed.svg"/>
          </Link>
          <span className="title">Administration</span>
        </div>

        <div className="header-right">
          {accountButton}
        </div>
      </header>
    )
  }
});