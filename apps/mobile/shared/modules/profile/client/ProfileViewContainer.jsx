
const { History } = ReactRouter;

Profile.ViewContainer = React.createClass({
  mixins: [History, ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('system', 'cloudinary');

    return {
      loading: (! handle.ready()),
      user: Meteor.user(),
      cloudinary: System.collection.findOne({ _id: 'cloudinary' }),
    }
  },

  handleSignOut() {
    Meteor.logout();
    this.history.pushState(null, '/');
  },

  render() {
    if (this.data.loading) return <App.Spinner />;

    return (
      <Profile.View {...this.data} onSignOut={this.handleSignOut} />
    )
  }
});
