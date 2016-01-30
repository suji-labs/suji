
const CategoryListItem = React.createClass({
  handleClick(value) {
    this.props.onActive(this.props.category._id, value);
  },

  render() {
    const category = this.props.category;
    if (! category) return null;
    const createdAt = moment(category.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr className="category-item">
        <td>{category._id}</td>
        <td className="link"
            onClick={this.props.onEdit}>{category.title}</td>
        <td>{category.seq}</td>
        <td><Form.Switch value={category.active}
                         onClick={this.handleClick} /></td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Category.PagedList = React.createClass({

  handleSort(field) {
    const object = this.props.pagination.get();

    if (field === object.sort.field) {
      object.sort.value *= -1;
    } else {
      object.sort = {
        field, value: -1
      }
    }

    this.props.pagination.set(object);
  },

  categories() {
    if (this.props.categories.length === 0) {
      return (
        <tr>
          <td key={'_'}
              className="category-item"
              colSpan="5">{L('text_no_categories')}</td>
        </tr>
      );
    }

    return this.props.categories.map((category) => (
      <CategoryListItem key={category._id}
                        category={category}
                        onEdit={this.props.onEdit.bind(null, category._id)}
                        onActive={this.props.onActive} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_title'), field: 'title' },
      { title: L('label_seq'), field: 'seq' },
      { title: L('label_active'), field: 'active' },
      { title: L('label_created_at'), field: 'createdAt' },
    ];

    const sort = this.props.pagination.get().sort;

    return (
      <Pagination.List className="table-list"
                       listTotal={this.props.categoriesCount}
                       listLength={this.props.categories.length}
                       pagination={this.props.pagination}
                       loading={this.props.loading}
                       loadMore={L('label_load_more')} >
        <table className="table table-bordered table-striped">
          <thead>
          <App.TableHeadSort columns={columns}
                             sort={sort}
                             onSort={this.handleSort} />
          </thead>
          <tbody>
            {this.categories()}
          </tbody>
        </table>
      </Pagination.List>
    )
  }
});
