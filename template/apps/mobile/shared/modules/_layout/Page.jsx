/**
 * Page Layout
 */

App.Page = React.createClass({
  render() {
    const header = this.props.header ?
      this.props.header : <App.Header title={this.props.title} />;

    const footer = this.props.footer ? this.props.footer : null;

    const className = this.props.footer ? "footer-on" : null;

    return (
      <main id="content" className={className}>
        {header}

        <article className="page" ref="page">
          {this.props.children}
        </article>

        {footer}
      </main>
    )
  }
});
