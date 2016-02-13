
Overlay.Alert = React.createClass({
  handleClick(e) {
    e.preventDefault();

    this.props.fulfill(1);
  },

  render() {
    return (
      <section>
        <div className="overlay-message">{this.props.message}</div>
        <button type="button"
                className="btn btn-default btn-block overlay-btn"
                onClick={this.handleClick} >
          {L('command_ok')}
        </button>
      </section>
    )
  }
});
