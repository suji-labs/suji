
Post.ViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const postId = this.props.params.id;
    const handle = Meteor.subscribe('postView', postId);

    return {
      loading: (! handle.ready()),
      post: Post.collection.findOne({ _id: postId }),
    }
  },

  render() {
    return (
      <Post.View {...this.data} />
    )
  }
});
