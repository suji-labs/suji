/**
 * returns the active category list sorted by seq ascending order.
 * used for 'Navigation menu'
 */

const { History } = ReactRouter;

Category.ListContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const handle = Meteor.subscribe('categoriesList');

    const categories = Category.collection.find({}, { sort: { seq: 1 }}).fetch();

    return {
      loading: (! handle.ready()),
      categories,
    }
  },

  render() {
    return (
      <Category.List {...this.data} />
    )
  }
});