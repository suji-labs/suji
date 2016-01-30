
ConnectionAlarm = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      connected: Meteor.status().connected
    }
  },

  render() {
    if (this.data.connected) return null;

    return (
      <div className="connection-alarm">{L('text_connection_alarm')}</div>
    )
  }
});
