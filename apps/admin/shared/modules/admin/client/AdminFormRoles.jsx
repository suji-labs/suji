
Admin.FormRoles = React.createClass({
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

    const self = this;
    const roles = this.props.roles.filter((role) => {
      return self.refs[role._id].state.value;
    });
    const roleNames = roles.map((role) => {
      return role.name;
    });

    this.props.onSubmit(roleNames);
  },

  handleCancel(e) {
    e.preventDefault();

    this.props.onCancel();
  },

  renderRoles() {
    if (this.props.loading) return <App.Spinner />;

    const roles = this.props.roles;
    return roles.map((role, i) => {
      const value = roles && (this.props.userRoles.indexOf(role.name) > -1);
      return (
        <Form.InputSwitch key={i}
                          id={role._id}
                          ref={role._id}
                          label={role.name}
                          value={value} />
      )
    });
  },

  render() {
    const name = this.props.admin && this.props.admin.profile &&
      this.props.admin.profile.name;

    return (
      <Form.Form onSubmit={this.handleSubmit}>

        {this.renderRoles()}

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
