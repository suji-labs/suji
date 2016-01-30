
const { Link } = ReactRouter;

Accounts.ui.InputPassword = React.createClass({
  render() {
    return (
      <div className="form-group">
        <input type="password"
               id="password"
               className="form-control"
               name="password"
               placeholder={L('accounts-ui:text_input_password')} />

        <Link to="/forgot-password" className="right">
          {L('accounts-ui:text_forgot_password')}
        </Link>
      </div>
    )
  }
});

