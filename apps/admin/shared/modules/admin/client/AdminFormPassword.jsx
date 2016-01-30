
Admin.FormPassword = React.createClass({
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

    const password = e.target.password.value;
    const passwordAgain = e.target['password-again'].value;

    this.props.onSubmit(password, passwordAgain);
  },

  handleCancel(e) {
    e.preventDefault();

    this.props.onCancel();
  },

  render() {
    return (
      <Form.Form onSubmit={this.handleSubmit}>

        <Form.InputText type="password"
                        id="password"
                        name="password"
                        label={L('label_password')}
                        error={this.errorMessage('password')} />

        <Form.InputText type="password"
                        id="password-again"
                        name="password-again"
                        label={L('label_password_again')}
                        error={this.errorMessage('password-again')} />

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
