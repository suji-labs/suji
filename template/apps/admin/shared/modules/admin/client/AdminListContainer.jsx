
Admin.ListContainer = React.createClass({
  mixins: [ReactMeteorData],

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
          { field: 'username', title: 'label_username' },
          { field: 'profile.name', title: 'label_name' },
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

    const handle = Meteor.subscribe('adminsList', query, { limit, sort });

    const adminsCount = Counts.get('adminsListCount');

    let findQuery = {};
    if (query && query.field) {
      findQuery[query.field] = searchRegExp(query.text);
    }
    findQuery = _.extend({ 'profile.isAdmin': true }, findQuery);

    const admins = Meteor.users.find(findQuery, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      adminsCount,
      admins,
      pagination,
      search,
    }
  },

  handleNewAdmin(e) {
    e.preventDefault();

    Overlay.page(
      <Admin.NewContainer />
    ).then((value) => {
      console.log('value = ' + value);
    });
  },

  render() {
    return (
      <Admin.List {...this.data} onNewAdmin={this.handleNewAdmin}/>
    )
  }
});