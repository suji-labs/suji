
Form.Switch = React.createClass({
  getInitialState() {
    return { value: false };
  },

  getDefaultProps() {
    return { onClick: () => {} }
  },

  handleClick: function(e) {
    const value = ! e.target.classList.contains('on');
    this.setState({ value });

    this.props.onClick(value);
  },

  componentDidMount() {
    this.setState({ value: this.props.value });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ value: !! nextProps.value });
  },

  render() {
    const radioClass = " radio-switch" + (this.state.value ? " on" : "");
    const className = this.props.className + radioClass;

    return (
      <div id={this.props.id}
           className={className}
           ref={this.props.ref}
           onClick={this.handleClick}>
        <div className="handle"></div>
      </div>
    )
  }
});
