
Profile.Picture = React.createClass({
  triggerUpload() {
    $('input[type=file]').trigger('click');
  },

  render() {
    const options = {
      config: {
        cloud_name: this.props.cloudinary.cloudName,
        api_key: this.props.cloudinary.apiKey
      },
      options: {
        upload_preset: this.props.cloudinary.presets.accounts
      },
      ui: {
        buttonHTML: this.props.buttonHTML,
        showProgress: true
      }
    };

    const pictureURL = userPictureURL(this.props.user);

    return (
      <div className="account-picture">
        <img src={pictureURL} onClick={this.triggerUpload} />
        <div className="upload-module">
          <Cloudinary.DirectUploader options={options}
                                     onUpload={this.props.onUpload} />
          <Cloudinary.ProgressBar />
        </div>
      </div>
    )
  }
});
