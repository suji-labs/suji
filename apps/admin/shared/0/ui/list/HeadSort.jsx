
App.TableHeadSort = React.createClass({
  handleSort(field) {
    this.props.onSort(field);
  },

  icon(field, sort) {
    if (field === sort.field) {
      return (sort.value === 1) ? "fa fa-sort-asc" : "fa fa-sort-desc";
    } else {
      return "fa fa-sort";
    }
  },

  render() {
    const columns = this.props.columns.map((column, i) => {

      return (
        <th key={i}
            className="sort"
            onClick={this.handleSort.bind(null, column.field)}>
          {column.title}
          <i className={this.icon(column.field, this.props.sort)}></i>
        </th>
      )
    });

    return <tr>{columns}</tr>;
  }
});
