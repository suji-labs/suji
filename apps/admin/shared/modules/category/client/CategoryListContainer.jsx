
const { History } = ReactRouter;

Category.ListContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getDefaultProps() {
    return {
      pagination: new ReactiveVar({
        increment: 20,
        limit: 20,
        sort: {
          field: 'seq',
          value: 1
        }
      }),
      search: new ReactiveVar({
        field: 'title',
        text: '',
      })
    }
  },

  getMeteorData() {
    const pagination = this.props.pagination;
    const limit = pagination.get().limit;
    const sort = {};
    sort[pagination.get().sort.field] = pagination.get().sort.value;

    const search = this.props.search;
    const query = {
      field: search.get().field,
      text: search.get().text,
    };


    const handle = Meteor.subscribe('categoriesList', query, { limit, sort });

    const categoriesCount = Counts.get('categoriesListCount');

    let findQuery = {};
    if (query && query.field) {
      findQuery[query.field] = searchRegExp(query.text);
    }
    const categories = Category.collection.find(findQuery, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      categoriesCount,
      categories,
      pagination,
      search
    }
  },

  handleNewCategory(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Category.NewContainer />).then((value) => {
      console.log('value = ' + value);
    });
  },

  handleEdit(categoryId) {
    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    const category = Category.collection.findOne(categoryId);

    Overlay.page(
      <Category.EditContainer category={category} />
    ).then((value) => {
      console.log('value = ' + value);
    });
  },

  handleActive(categoryId) {
    Meteor.call('categoryUpdateActive', categoryId, (error) => {
      if (error) {
        return Overlay.notify(error.reason);
      }
    });
  },

  render() {
    return (
      <Category.List {...this.data} onNewCategory={this.handleNewCategory}
                                    onEdit={this.handleEdit}
                                    onActive={this.handleActive} />
    )
  }
});