
Account.Form = React.createClass({
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

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    this.props.onSubmit(email, password, name);
  },

  handleCancel(e) {
    e.preventDefault();

    this.props.onCancel();
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    const account = this.props.account;

    return (
      <App.Page>
        <header>
          <h3>{L('label_account')} <small>{L('label_edit')}</small></h3>
        </header>

        <section className="form-frame">
          <Form.Form onSubmit={this.handleSubmit}>
            <Form.InputText id="email"
                            name="email"
                            value={account.emails[0].address}
                            label={L('label_email')}
                            error={this.errorMessage('email')} />

            <Form.InputText id="password"
                            name="password"
                            label={L('label_password')}
                            error={this.errorMessage('password')} />

            <Form.InputText id="name"
                            name="name"
                            value={account.profile.name}
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
        </section>
      </App.Page>
    )
  }
});
