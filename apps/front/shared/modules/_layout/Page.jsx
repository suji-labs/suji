
App.Page = React.createClass({
  getDefaultProps() {
    return {
      className: ''
    }
  },

  render() {
    return (
      <main id="content" className={this.props.className}>
        <article className="page" ref="page">
          {this.props.children}
        </article>
      </main>
    )
  }
});
