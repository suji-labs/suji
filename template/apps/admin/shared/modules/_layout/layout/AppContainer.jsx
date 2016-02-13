
App.Container = React.createClass({
  render() {
    const notificationsContainer = Meteor.isClient ?
      <Overlay.NotificationsContainer /> : null;

    return (
      <div id="container">
        {this.props.children}

        {notificationsContainer}
        <ConnectionAlarm />
      </div>
    )
  }
});
