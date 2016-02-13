
Admin.ViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const adminId = this.props.params.id;

    const handle = Meteor.subscribe('adminView', adminId);

    const admin = Meteor.users.findOne(adminId);

    return {
      loading: (! handle.ready()),
      admin,
    }
  },

  handleUpdatePassword(e) {
    e.preventDefault();

    Overlay.page(
      <Admin.EditPasswordContainer adminId={this.data.admin._id} />
    ).then((value) => {
      console.log('value = ' + value);
    });
  },

  handleUpdateName(e) {
    e.preventDefault();

    Overlay.page(
      <Admin.EditNameContainer admin={this.data.admin} />
    ).then((value) => {
      console.log('value = ' + value);
    });
  },

  handleUpdateRoles(e) {
    e.preventDefault();

    Overlay.page(
      <Admin.EditRolesContainer admin={this.data.admin} />
    ).then((value) => {
      console.log('value = ' + value);
    });
  },

  render() {
    return (
      <Admin.View {...this.data} onUpdatePassword={this.handleUpdatePassword}
                                 onUpdateName={this.handleUpdateName}
                                 onUpdateRoles={this.handleUpdateRoles} />
    )
  }
});
