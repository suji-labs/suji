
Form.Select = React.createClass({
  getDefaultProps() {
    return {
      type: 'text',
      error: "",
      onChange: () => {}
    }
  },

  handleChange(e) {
    e.preventDefault();
    //this.setState({ options: e.target.options });
  },

  render() {
    const label = (this.props.label) ?
      (<label>{this.props.label}</label>) : null;

    const className = (_.isEmpty(this.props.error)) ?
      "form-group" : "form-group has-error";

    const options = this.props.options && this.props.options.map((option) => {
      return <option key={option.value}
                     value={option.value}>{option.title}</option>
    });

    return (
      <div className={className}>
        {label}
        <select id={this.props.id}
                className="form-control"
                name={this.props.name}
                placeholder={this.props.placeholder}
                ref={this.props.ref}
                onChange={this.handleChange} >
          {options}
        </select>
        <p className="help-block">{this.props.error}</p>
      </div>
    )
  }
});
