
Form.Alert = React.createClass({
  render() {
    return (
      <div className="alert alert-danger">
        {this.props.children}
      </div>
    )
  }
});
