
const { Link } = ReactRouter;

const CategoryListItem = React.createClass({
  render() {
    const category = this.props.category;

    return (
      <Link to={`/category/${category._id}`}
            className="category-item">{category.title}</Link>
    )
  }
});


Category.List = React.createClass({
  categories() {
    if (this.props.categories.length === 0) {
      return (
        <div key={'_'} className="category-item">
          {L('text_no_categories')}
        </div>
      );
    }

    return this.props.categories.map((category) => (
      <CategoryListItem key={category._id} category={category} />
    ));
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    return (
      <div className="nav-list">
        {this.categories()}
      </div>
    )
  }
});

