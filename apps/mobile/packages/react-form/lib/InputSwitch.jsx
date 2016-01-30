
Form.InputSwitch = React.createClass({

  getInitialState: function() {
    return { value: false };
  },

  handleClick: function(value) {
    this.setState({ value });

    this.props.onClick(value);
  },

  getDefaultProps() {
    return {
      error: "",
      onClick: () => {}
    }
  },

  componentDidMount() {
    this.setState({ value: this.props.value });
  },

  render() {
    const label = (this.props.label) ?
      (<label>{this.props.label}</label>) : null;

    const className = (_.isEmpty(this.props.error)) ?
      "form-group switch" : "form-group switch has-error";

    return (
      <div className={className}>
        {label}
        <Form.Switch id={this.props.id}
                     className="form-control"
                     name={this.props.name}
                     value={this.state.value}
                     ref={this.props.ref}
                     onClick={this.handleClick} />
        <p className="help-block">{this.props.error}</p>
      </div>
    )
  }
});