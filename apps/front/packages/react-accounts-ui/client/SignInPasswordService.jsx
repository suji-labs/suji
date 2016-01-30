Accounts.ui.SignInPasswordService = React.createClass({
  fields() {
    return [
      {
        name: 'username-or-email',
        placeholder: L('accounts-ui:text_input_username_or_email'),
        visible() {
          return _.contains(
            ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        name: 'username',
        placeholder: L('accounts-ui:text_input_username'),
        visible() {
          return Accounts.ui.passwordSignupFields() === "USERNAME_ONLY";
        }
      },
      {
        name: 'email',
        placeholder: L('accounts-ui:text_input_email'),
        type: 'email',
        visible() {
          return Accounts.ui.passwordSignupFields() === "EMAIL_ONLY";
        }
      },
    ];
  },

  handleSubmit(e) {
    e.preventDefault();

    const user = (e.target['username-or-email'] &&
      e.target['username-or-email'].value) ||
      (e.target.username && e.target.username.value) ||
      (e.target.email && e.target.email.value);

    return this.props.onSubmit(user, e.target.password.value);
  },

  componentDidMount() {
    $('form input:first').focus();
  },

  renderInputs() {
    return this.fields().map((item, i) => {
      return (item.visible()) ? <Accounts.ui.Input key={i} {...item} /> : null;
    })
  },

  render() {
    return (
      <Form.Form id="form-sign-in" onSubmit={this.handleSubmit}>

        {this.renderInputs()}

        <Accounts.ui.InputPassword />

        <Form.Button type="submit"
                     className="btn btn-primary btn-block">
          {L('accounts-ui:label_sign_in')}
        </Form.Button>
      </Form.Form>
    )
  }
});
