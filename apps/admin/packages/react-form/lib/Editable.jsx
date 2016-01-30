
Form.Editable = React.createClass({
  getInitialState: function() {
    return { value: '' };
  },

  handleChange: function(e) {
    this.setState({ value: e.target.value });
  },

  getDefaultProps() {
    return {
      type: 'text',
      error: "",
    }
  },

  componentDidMount() {
    this.setState({ value: this.props.value });
  },

  render() {
    const className = (_.isEmpty(this.props.error)) ?
      "form-group" : "form-group has-error";

    return (
      <div className={className}>
        {this.props.label ? <label>{this.props.label}</label> : null}
        <div id={this.props.id}
             className="form-control"
             contentEditable="true"
             name={this.props.name}
             placeholder={this.props.placeholder}
             onChange={this.handleChange} >{this.state.value}</div>
        <p className="help-block">{this.props.error}</p>
      </div>
    )
  }
});