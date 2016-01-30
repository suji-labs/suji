
const contentView = function(content) {
  if (! content) return null;
  
  let value = "";
  switch (content.type) {
    case 'text':
      value = `<p>${content.data && content.data.replace(/\r?\n/g, '<br />')}</p>`;
      break;

    case 'html':
      value = content.data;
      break;

    case 'markdown':
      value = content.data;
      break;
  }

  return value;
};

Post.View = React.createClass({
  handleEditPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.EditContainer post={this.props.post} />).then((value) => {
        console.log('value = ' + value);
      });
  },

  renderFooter() {
    return (
      <App.Footer>
        <button className="btn btn-warning btn-lg btn-block"
                onClick={this.handleEditPost}>{L('command_edit')}</button>
      </App.Footer>
    )
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    const post = this.props.post;
    const createdAt = moment(post.createdAt).format('YYYY-MM-DD HH:mm');
    const authorPictureURL = userPictureURL(post.author.url);
    const isEditable = !! (post.author._id === Meteor.userId());
    const footer = isEditable ? this.renderFooter() : null;

    return (
      <App.Page className={isEditable ? 'footer-on' : null}
                title={L('label_post')}
                footer={footer} >

          <header>
            <div className="post-info">
              <img src={authorPictureURL} />
              <p className="name">{post.author.name}</p>
              <p className="time">{createdAt}</p>
            </div>

            <h3>{post.title}</h3>
          </header>

          <div className="post-view"
               dangerouslySetInnerHTML={{__html: contentView(post.content)}} />

      </App.Page>
    )
  }
});
