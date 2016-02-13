if (typeof About === 'undefined') About = {};

About.View = React.createClass({
  getDefaultProps() {
    return {
      version: ''
    }
  },

  render() {
    return (
      <App.Page title={L('label_about')} >

        <div className="about-frame-wrapper">
          <div className="about-frame">
            <img className="about-logo" src="/images/logo.svg" />
            <div className="about-info">
              <p className="version">Version {this.props.version}</p>
              <p className="license">Shine is licensed under the MIT License.</p>
              <p className="copyright">&copy; 2015 Bookpal Co., Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>

      </App.Page>
    )
  }
});
