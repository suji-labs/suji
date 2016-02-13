
const { CSSTransitionGroup } = React.addons;

const notificationsCollection = new Mongo.Collection(null);

const Notification = React.createClass({
  handleClose() {
    Meteor.setTimeout(() =>
      notificationsCollection.remove(this.props.item._id), 0);
  },

  render() {
    const className = `alert alert-${this.props.item.options.style}`;
    const message = (this.props.item.options.format === 'text') ?
      this.props.item.message : (
      <span dangerouslySetInnerHTML={{__html: this.props.item.message}} />
    );

    return (
      <div className={className}>
        <button type="button"
                className="close"
                onClick={this.handleClose} >
          <span aria-hidden="true">&times;</span>
        </button>
        {message}
      </div>
    )
  }
});

Overlay.NotificationsContainer = React.createClass({
  statics: {
    push(message, {format = 'text', style = 'warning', duration = 5000} = {}) {
      const id = notificationsCollection.insert({
        message: message,
        options: { format, style, duration },
        createdAt: new Date()
      });

      if (duration >= 0) {
        Meteor.setTimeout(() => notificationsCollection.remove(id), duration);
      }

      return id;
    }
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      list:  notificationsCollection.find({}, { sort: { createdAt: -1 }}).fetch()
    }
  },

  getDefaultProps() {
    return {
      id: 'notifications-container'
    }
  },

  notificationsList() {
    return this.data.list.map((item, i) => {
      return (
        <Notification key={i} item={item} />
      )
    });
  },

  render() {
    const props = {
      transitionName: "page",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300
    };

    return (
      <CSSTransitionGroup {...props} component="div" id={this.props.id}>
        {this.notificationsList()}
      </CSSTransitionGroup>
    )
  }
});
