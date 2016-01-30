
Admin.FormName = React.createClass({
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

    const name = e.target.name.value;

    this.props.onSubmit(name);
  },

  handleCancel(e) {
    e.preventDefault();

    this.props.onCancel();
  },

  render() {
    const name = this.props.admin && this.props.admin.profile &&
      this.props.admin.profile.name;

    return (
      <Form.Form onSubmit={this.handleSubmit}>

        <Form.InputText type="text"
                        id="name"
                        name="name"
                        value={name}
                        label={L('label_name')}
                        error={this.errorMessage('name')} />

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
