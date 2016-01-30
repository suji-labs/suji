
Admin.Form = React.createClass({
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

    const username = e.target.username.value;
    const password = e.target.password.value;
    const passwordAgain = e.target['password-again'].value;
    const name = e.target.name.value;

    this.props.onSubmit(username, password, passwordAgain, name);
  },

  handleCancel(e) {
    e.preventDefault();

    this.props.onCancel();
  },

  render() {
    return (
      <Form.Form onSubmit={this.handleSubmit}>

        <Form.InputText id="username"
                        name="username"
                        label={L('label_username')}
                        error={this.errorMessage('username')} />

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

        <Form.InputText id="name"
                        name="name"
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
