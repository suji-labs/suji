
Admin.EditRolesContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('rolesList');

    const roles = Roles.getAllRoles().fetch();
    const userRoles = this.props.admin.roles;

    return {
      loading: ! handle.ready(),
      roles,
      userRoles,
    }
  },

  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(roles) {
    const adminId = this.props.admin._id;

    const self = this;
    Meteor.call('adminUpdateRoles', adminId, roles, function(error) {
      if (error) {
        return Overlay.notify(error.reason);
      }

      return self.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    return (
      <Admin.FormRoles {...this.data} errors={this.state.errors}
                                      onSubmit={this.handleSubmit}
                                      onCancel={this.handleCancel} />
    )
  }
});
