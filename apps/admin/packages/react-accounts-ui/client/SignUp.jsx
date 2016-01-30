
const { Link } = ReactRouter;

Accounts.ui.SignUp = React.createClass({
  fields() {
    return [
      {
        name: 'username',
        placeholder: L('accounts-ui:text_input_username'),
        visible() {
          return _.contains(
            [
              "USERNAME_AND_EMAIL",
              "USERNAME_AND_OPTIONAL_EMAIL",
              "USERNAME_ONLY"
            ],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        type: 'email',
        name: 'email',
        placeholder: L('accounts-ui:text_input_email'),
        visible() {
          return _.contains(
            [
              "USERNAME_AND_EMAIL",
              "EMAIL_ONLY"
            ],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        type: 'email',
        name: 'email',
        placeholder: L('accounts-ui:text_input_email_optional'),
        visible() {
          return Accounts.ui.passwordSignupFields() ===
            "USERNAME_AND_OPTIONAL_EMAIL";
        }},
      {
        type: 'password',
        name: 'password',
        placeholder: L('accounts-ui:text_input_password'),
        visible() {
          return true;
        }},
      {
        type: 'password',
        name: 'password-again',
        placeholder: I18n.get('accounts-ui:text_input_password_again'),
        visible() {
          // No need to make users double-enter their password if
          // they'll necessarily have an email set, since they can use
          // the "forgot password" flow.
          return _.contains(
            [ "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY" ],
            Accounts.ui.passwordSignupFields());
        }
      },
    ];
  },

  errors() {
    const errors = this.props.errors.map((item, i) => {
      return <p key={i}>{item.reason}</p>;
    });

    return (! _.isEmpty(errors)) ? <Form.Alert>{errors}</Form.Alert> : null;
  },

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const username = e.target.username && e.target.username.value;
    const email = e.target.email && e.target.email.value;
    const password = e.target.password && e.target.password.value;

    this.props.onSubmit(username, email, password);
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
      <div className="accounts-ui-frame">
        <Form.Form id="form-sign-up" onSubmit={this.handleSubmit}>

          {this.errors()}

          {this.renderInputs()}

          <Form.Button type="submit"
                       className="btn btn-primary btn-block">
            {L('command_sign_up')}
          </Form.Button>
        </Form.Form>

        <Link to="/sign-in" className="btn btn-link" >
          {L('accounts-ui:label_sign_in')}
        </Link>
      </div>
    )
  }
});
