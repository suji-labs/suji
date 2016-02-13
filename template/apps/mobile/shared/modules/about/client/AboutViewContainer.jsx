
About.ViewContainer = React.createClass({
  getInitialState() {
    return {
      version: APP_VERSION
    }
  },

  render() {
    return <About.View version={this.state.version} />;
  }
});
