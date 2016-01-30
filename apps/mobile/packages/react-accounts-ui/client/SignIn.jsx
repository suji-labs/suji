
const { Link } = ReactRouter;

Accounts.ui.SignIn = React.createClass({

  errors() {
    const errors = this.props.errors.map((item, i) => {
      const message = (typeof item === 'string') ? item : item.reason;
      return <p key={i}>{L(`accounts-ui:${message}`)}</p>;
    });

    return (! _.isEmpty(errors)) ? <Form.Alert>{errors}</Form.Alert> : null;
  },

  hasOtherServices() {
    return Accounts.ui.getSignInServices().length > 1;
  },

  render() {
    const oauthServices = Accounts.ui.getOAuthServices().map((service, i) => {
      return (
        <Accounts.ui.SignInOtherServices key={i}
                                         name={service}
                                         onSignInWith={this.props.handleOAuth}
                                         onConfigure={this.props.handleConfigure} />
      );
    });

    const passwordService = Accounts.ui.hasPasswordService() ? (
      <Accounts.ui.SignInPasswordService {...this.props}
        onSubmit={this.props.handleSubmit} />
    ) : null;

    const separator = oauthServices && passwordService ? (
      <div className="separator"></div>
    ) : null;

    return (
      <div className="accounts-ui-frame">
        {this.errors()}

        {oauthServices}

        {separator}

        {passwordService}

        <Link to="/sign-up" className="btn btn-link" >
          {L('accounts-ui:label_sign_up')}
        </Link>
      </div>
    )
  }
});
