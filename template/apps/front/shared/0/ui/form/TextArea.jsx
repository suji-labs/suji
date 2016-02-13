
Form.TextArea = React.createClass({
  getInitialState() {
    return {
      value: ''
    }
  },

  getDefaultProps() {
    return {
      error: "",
      onChange: () => {}
    }
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  componentWillMount() {
    this.setState({ value: this.props.value })
  },

  render() {
    const label = (this.props.label) ?
      (<label>{this.props.label}</label>) : null;

    const className = (_.isEmpty(this.props.error)) ?
      "form-group" : "form-group has-error";

    return (
      <div className={className}>
        {label}
        <textarea id={this.props.id}
                  className="form-control"
                  rows={this.props.rows}
                  name={this.props.name}
                  value={this.state.value}
                  placeholder={this.props.placeholder}
                  onChange={this.handleChange} />
        <p className="help-block">{this.props.error}</p>
      </div>
    )
  }
});