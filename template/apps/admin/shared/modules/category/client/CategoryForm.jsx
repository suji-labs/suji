
Category.Form = React.createClass({
  getDefaultProps() {
    return {
      errors: []
    }
  },

  errorMessage(attribute) {
    if (this.props.errors && this.props.errors.length > 0) {
      const error = _.find(this.props.errors,
        (error) => (error.attribute === attribute));

      if (error) {
        return _.reduce(error.messages, (value, msg) => value + msg, "");
      }
    }

    return "";
  },

  handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const seq = parseInt(e.target.seq.value);

    this.props.onSubmit(title, seq);
  },

  handleCancel(e) {
    console.log('cancel button');
    e.preventDefault();

    this.props.onCancel();
  },

  componentDidMount() {
    Meteor.setTimeout(() => $('form input:first').focus(), 400);
  },

  render() {
    const title = this.props.category && this.props.category.title;
    const seq = this.props.category && this.props.category.seq;

    return (
      <Form.Form onSubmit={this.handleSubmit}>
        <Form.InputText id="title"
                        name="title"
                        value={title}
                        label={L('label_title')}
                        error={this.errorMessage('title')} />

        <Form.InputText id="seq"
                        name="seq"
                        value={seq}
                        label={L('label_seq')}
                        error={this.errorMessage('seq')} />

        <Form.Actions>
          <Form.Button type="submit" className="btn btn-primary">
            {L('command_ok')}
          </Form.Button>
          <Form.Button className="btn btn-default"
                       onClick={this.handleCancel} >
            {L('command_cancel')}
          </Form.Button>
        </Form.Actions>
      </Form.Form>
    )
  }
});
