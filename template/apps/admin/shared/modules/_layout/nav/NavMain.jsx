
App.NavMain = React.createClass({
  statics: {
    toggle() {
      $('.layout').toggleClass('aside-left-on');
      //const container = document.getElementById('container');
      //container.className = (container.className) ? '' : 'aside-left-on';
    },

    hide() {
      $('.layout').removeClass('aside-left-on');
      //document.getElementById('container').className = '';
    }
  },

  getInitialState() {

    return {
      iconView: false
    }
  },

  handleView() {
    $('.layout').toggleClass('aside-icon-view');
    this.setState({iconView: !this.state.iconView});
  },

  render() {
    const icon = this.state.iconView ? 'fa fa-arrow-right' : 'fa fa-arrow-left';

    return (
      <div className="nav-main">
        <App.AccountInfo />

        <App.NavLinks />

        <div className="icon-view-handle" onClick={this.handleView}>
          <i className={icon}></i>
        </div>
      </div>
    )
  }
});
