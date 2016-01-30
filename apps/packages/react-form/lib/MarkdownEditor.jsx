
Form.MarkdownEditor = React.createClass({
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

  handleText(e) {
    e.preventDefault();

    // hide markdown
  },

  handlePreview(e) {
    e.preventDefault();

    // show markdown with text set
    marked(this.state.value);
  },

  componentDidMount() {
    this.setState({ value: this.props.value });
  },

  render() {
    const className = (_.isEmpty(this.props.error)) ?
      "form-group" : "form-group has-error";

    const markdown = () => {
      return {__html: marked(this.state.value)}
    };

    return (
      <div className={className}>
        {this.props.label ? <label>{this.props.label}</label> : null}
        <textarea id={this.props.id}
                  className="form-control"
                  rows={this.props.rows}
                  name={this.props.name}
                  value={this.state.value}
                  placeholder={this.props.placeholder}
                  onChange={this.handleChange} />
        <div className="markdown-editor" dangerouslySetInnerHTML={markdown()} />
        <button onClick={this.handleText}>Text</button>
        <button onClick={this.handlePreview}>Preview</button>
        <p className="help-block">{this.props.error}</p>
      </div>
    )
  }
});