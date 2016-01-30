
Accounts.ui.Input = React.createClass({
  getDefaultProps() {
    return {
      type: 'text'
    }
  },

  render() {
    return (
      <div className="form-group">
        <input type={this.props.type}
               id={this.props.id}
               className="form-control"
               name={this.props.name}
               placeholder={this.props.placeholder} />
      </div>
    )
  }
});

