
App.NavMain = React.createClass({
  handleBackdropClick() {
    App.LayoutMain.hide();
  },

  render() {
    return (
      <div className="nav-main-backdrop" onClick={this.handleBackdropClick}>
        <div className="nav-main">
          <App.AsideAccounts />
          <App.NavLinks />
        </div>
      </div>
    )
  }
});
