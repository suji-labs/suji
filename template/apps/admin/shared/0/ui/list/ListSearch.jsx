
App.ListSearch = React.createClass({
  getDefaultProps() {
    return {
      countTotal: 0,
    }
  },

  handleSubmit(e) {
    e.preventDefault();

    const search = this.props.search.get();
    if (e.target.field) search.field = e.target.field.value;
    search.text = e.target.searchText.value;
    this.props.search.set(search);
  },

  renderSelects() {
    const options = this.props.search && this.props.search.get().options;
    if (! options) return null;

    const selectOptions = options.map((option) => {
      return {
        value: option.field, title: L(option.title)
      }
    });

    return (
      <Form.Select name="field" options={selectOptions} />
    )
  },

  render() {
    const count = this.props.countTotal;

    return (
      <div className="list-search">
        <div className="pull-left">
          <p className="count">{L('text_search_count', [count])}</p>
        </div>

        <div className="pull-right">
          <Form.Form className="form-inline" onSubmit={this.handleSubmit}>

            {this.renderSelects()}

            <Form.InputText name="searchText" />
            <Form.Button type="submit">{L('label_search')}</Form.Button>
          </Form.Form>
        </div>
      </div>
    )
  }
});
