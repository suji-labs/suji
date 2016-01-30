/**
 * Overlay
 *
 *
 */
Overlay = {
  containerId: 'overlay-container',

  /**
   * show notification message on the top right corner of the screen
   * @param message
   *    text or html message
   *
   * @param options
   *    format: the format of the message, { 'text' : 'html' }
   *      default value: 'text'
   *
   *    style: UI style,
   *      { 'default', 'primary', 'info', 'warning', 'success', 'danger' }
   *      default value: 'warning'
   *
   *    duration: duration time in millisecond
   *      if 0, it lasts forever.
   *      default value: 5000
   */
  notify(message, options) {
    Overlay.NotificationsContainer.push(message, options);
  },

  /**
   * show overlay page
   *
   * @param element
   *   React element to show in the overlay
   *
   * @param options
   *
   * @returns {*|Promise}
   */
  page(element, options = {}) {
    const node = document.body.appendChild(document.createElement('div'));
    node.className = 'overlay-container';

    const cleanup = (value) => {
      if (page) page.onMount(false);
      Meteor.setTimeout(() => {
        ReactDOM.unmountComponentAtNode(node);
        Meteor.setTimeout(() => node.remove());
      }, 400);
      return value;
    };

    let page;

    const promise = new Promise((fulfill, reject) => {
      const renderElement = React.cloneElement(element, { fulfill, reject });
      const props = _.extend(options, { reject });
      page = ReactDOM.render((
        <Overlay.Page {...props}>
          {renderElement}
        </Overlay.Page>
      ), node);
    });

    return promise.then((value) => cleanup(value), (value) => cleanup(value));
  },

  /**
   * show overlay dialog box with 'ok' button with message
   *
   * @param message
   *   text message
   * @param options
   *
   * @returns {*|Promise}
   */
  alert(message, options) {
    return this.page((
      <Overlay.Alert message={message} />
    ), options);
  },

  /**
   * show overlay dialog box with 'yes', 'no' button with message
   *
   * @param message
   *
   * @param options
   *
   * @returns {*|Promise}
   */
  confirm(message, options) {
    return this.page((
      <Overlay.Confirm message={message} />
    ), options);
  },

};
