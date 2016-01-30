

const { Link } = ReactRouter;

App.NavLinks = React.createClass({
  render() {
    return (
      <nav className="links">
        <Link to="/home">{L('label_home')}</Link>
        <Category.ListContainer />
        <Link to="/about">{L('label_about')}</Link>
      </nav>
    )
  }
});