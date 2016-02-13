/**
 * Spinner for general use
 */
App.Spinner = React.createClass({
  render() {
    return (
      <div className="spinner-wrapper">
        <Meteor.Spinner />
      </div>
    )
  }
});

/**
 * Spinner for table use
 */
App.TableSpinner = React.createClass({
  render() {
    return (
      <tr className="spinner-wrapper">
        <Meteor.Spinner />
      </tr>
    )
  }
});

/**
 * Spinner for paginated list use
 */
App.LoadMoreSpinner = React.createClass({
  render() {
    return (
      <div className="list-spinner-wrapper">
        <Meteor.Spinner />
      </div>
    )
  }
});
