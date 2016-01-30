
Accounts.ui.SignInOtherServices = React.createClass({
  configured() {
    return !! ServiceConfiguration.configurations.findOne({
      service: this.props.name });
  },

  capitalizedName() {
    if (this.props.name === 'github') {
      // XXX we should allow service packages to set their capitalized name
      return 'GitHub';
    } else if (this.name === 'meteor-developer') {
      return 'Meteor';
    } else {
      const name = this.props.name;
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  },

  render() {
    return (this.configured()) ? (
      <button className={`btn btn-default btn-block ${this.props.name}`}
              onClick={this.props.onSignInWith.bind(null, this.props.name)}>
        {L('accounts-ui:label_sign_in_with', [this.capitalizedName()])}
      </button>
    ) : (
      <button className={`btn btn-default btn-block btn-configure`}
              onClick={this.props.onConfigure.bind(null, this.props.name)}>
        {L('accounts-ui:label_configure_sign_in', [this.capitalizedName()])}
      </button>
    )
  }
});
