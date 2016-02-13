
App.Page = React.createClass({
  getDefaultProps() {
    return {
      className: ''
    }
  },

  render() {
    return (
      <main id="content" className={this.props.className}>
        <article className="page">
          {this.props.children}
        </article>
      </main>
    )
  }
});
