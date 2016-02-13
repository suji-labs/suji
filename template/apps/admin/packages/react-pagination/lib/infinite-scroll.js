/**
 * Infinite Scrolling event trigger
 */

/**
 * check scroll position is on the boundary
 *
 * @returns {boolean}
 */
const isBorderOfContent = function() {
  var elements = $('.load-more');
  if (elements && elements[0]) {
    var rect = elements[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && //* or $(window).height()
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) //* or $(window).width()
    );
  }

  return false;
};

/**
 * bind, or unbind the scrolling event
 *
 * @type {{bind: Function, unbind: Function}}
 */
InfiniteScrollTrigger = {
  /**
   * bind the scrolling event
   *
   * @param callback : callback to run at the event
   * @param interval : time interval to check scrolling (millisecond)
   * @returns {*} handle for setInterval
   */
  bind: function(callback, interval) {
    interval = interval || 100;
    return Meteor.setInterval(function() {
      if (isBorderOfContent())
        callback();
    }, interval);
  },

  /**
   * unbind the scrolling event
   *
   * @param handle for setInterval
   */
  unbind: function(handle) {
    if (handle)
      Meteor.clearInterval(handle);
  }
};
