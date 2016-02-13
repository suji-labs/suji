
Overlay.Confirm = React.createClass({
  handleClick(value) {
    this.props.fulfill(value);
  },

  render() {
    return (
      <section>
        <div className="overlay-message">{this.props.message}</div>
        <button type="button"
                className="btn btn-primary btn-block overlay-btn"
                onClick={this.handleClick.bind(this, true)} >
          {L('command_yes')}
        </button>
        <button type="button"
                className="btn btn-default btn-block overlay-btn"
                onClick={this.handleClick.bind(this, false)} >
          {L('command_no')}
        </button>
      </section>
    )
  }
});
