
Profile.PictureContainer = React.createClass({
  handleUpload(error, data) {
    if (error) {
      console.log('Cloudinary.uploadImage error: ');
      console.log(error);
    } else {
      const object = {
        url: data.result.url,
        surl: data.result.secure_url,
        size: data.result.bytes,
        width: data.result.width,
        height: data.result.height,
        ext: data.result.format,
        mime: data.originalFiles[0].type,
        original: data.originalFiles[0].name,
        repoId: data.result.public_id
      };
      console.log('upload success');

      Meteor.call('profilePictureInsert', object, (error, result) => {
        if (error) {
          console.log(error.reason);
        } else {
          console.log('picture upload success');
        }
      });
    }
  },

  render() {
    return (
      <Profile.Picture user={this.props.user}
                          cloudinary={this.props.cloudinary}
                          onUpload={this.handleUpload} />
    )
  }
})