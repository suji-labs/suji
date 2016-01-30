
const { Link, History } = ReactRouter;

const viewPages = [
  (
    <h1>Intro page#1</h1>
  ),

  (
    <h1>Intro page#2</h1>
  ),

  (
    <h1>Intro page#3</h1>
  ),
];

Intro.View = React.createClass({
  mixins: [History],

  handleClickHandle(id, e) {
    e.stopPropagation();

    this.history.pushState(null, `/intro/${id}`);
  },

  handleGoHome() {
    this.history.replaceState(null, '/home');
  },

  renderPage(id) {
    const page = viewPages[id-1];

    return (
      <section id={id} className="page">
        {page}
      </section>
    )
  },

  renderHandle() {
    return viewPages.map((page, i) => {
      return (
        <button key={i} onClick={this.handleClickHandle.bind(this, i+1)}>{i+1}</button>
      )
    });
  },

  render() {
    const id = this.props.id;

    return (
      <main id="content" className="intro" onClick={this.handleGoHome}>
        <div className="full-page">
          {this.renderPage(id)}
        </div>

        <div className="handle">
          {this.renderHandle()}
        </div>

      </main>
    )
  }
});

/*
const { Link, History } = ReactRouter;

const viewPages = [
  (
    <h1>Intro page#1</h1>
  ),

  (
    <h1>Intro page#2</h1>
  ),

  (
    <h1>Intro page#3</h1>
  ),
];

Intro.View = React.createClass({
  mixins: [History],

  handleClickHandle(id, e) {
    e.stopPropagation();

    $('.full-page').scrollTop((id - 1) * window.innerHeight);
  },

  handleGoHome() {
    this.history.replaceState(null, '/home');
  },

  componentDidMount() {
    const height = window.innerHeight + 'px';
    console.log(height);

    $('.full-page .page').css('height', height);
  },

  renderPages() {
    return viewPages.map((page, i) => {
      return (
        <section key={i} id={i+1} className="page">
          {page}
        </section>
      )
    })
  },

  renderHandle() {
    return viewPages.map((page, i) => {
      return (
        <button key={i} to={`#${i+1}`} onClick={this.handleClickHandle.bind(this, i+1)}>{i+1}</button>
      )
    });
  },

  render() {
    return (
      <main id="content" className="intro" onClick={this.handleGoHome}>
        <div className="full-page">
          {this.renderPages()}
        </div>

        <div className="handle">
          {this.renderHandle()}
        </div>

      </main>
    )
  }
});
*/