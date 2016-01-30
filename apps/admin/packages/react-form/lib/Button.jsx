
Form.Button = React.createClass({
  getDefaultProps() {
    return {
      type: 'button',
      className: 'btn btn-default',
    }
  },

  render() {
    return (
      <button type={this.props.type}
              className={this.props.className}
              onClick={this.props.onClick} >
        {this.props.children}
      </button>
    )
  }
});
