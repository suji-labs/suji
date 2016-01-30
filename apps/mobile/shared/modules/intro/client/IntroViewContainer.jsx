
Intro.ViewContainer = React.createClass({
  getDefaultProps() {
    return { id: 1 }
  },

  render() {
    const id = this.props.params.id ?
      parseInt(this.props.params.id) : this.props.id;
    return (
      <Intro.View id={id} />
    )
  }
});
