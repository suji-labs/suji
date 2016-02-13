
const { RouteContext } = ReactRouter;

Account.ListContainer = React.createClass({
  mixins: [ReactMeteorData, RouteContext],

  getDefaultProps() {
    return {
      pagination: new ReactiveVar({
        increment: 20,
        limit: 20,
        sort: {
          field: 'createdAt',
          value: -1
        }
      }),
      search: new ReactiveVar({
        options: [
          { field: 'profile.name', title: 'label_name' },
          { field: 'emails.address', title: 'label_email' },
        ],
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

    const handle = Meteor.subscribe('accountsList', query, { limit, sort });

    const accountsCount = Counts.get('accountsListCount');

    let findQuery = {};
    if (query && query.field) {
      findQuery[query.field] = searchRegExp(query.text);
    }
    findQuery = _.extend({ 'profile.isAdmin': { $ne: true }}, findQuery);

    const accounts = Meteor.users.find(findQuery, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      accountsCount,
      accounts,
      pagination,
      search
    }
  },

  render() {
    return (
      <Account.List {...this.data} location={this.props.location} />
    )
  }
});
