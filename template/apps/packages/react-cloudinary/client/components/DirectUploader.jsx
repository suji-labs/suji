
Cloudinary.DirectUploader = React.createClass({

  componentDidMount() {
    this._autorun = Tracker.autorun((e) => {
//      if (e.firstRun) {
        const reactId = $(this.refs.fileInput).attr('data-reactid');
        const options = _.extend({ reactId }, this.props.options);

        Cloudinary.uploadImage(options, this.props.onUpload);
//      }
    });
  },

  componentWillUnmount(){
    this._autorun.stop();
  },

  render() {
    return (
      <div className="cloudinary-uploader">
        <div ref="fileInput" className="btn btn-default fileinput-button">
          <span>Upload...</span>
          <input type="file" className="cloudinary-fileupload" name="file" />
        </div>
      </div>
    )
  }
});
