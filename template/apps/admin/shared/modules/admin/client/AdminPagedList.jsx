
const { Link } = ReactRouter;

const AdminListItem = React.createClass({
  render() {
    const admin = this.props.admin;
    if (! admin) return null;

    const username = admin.username;
    const name = admin.profile && admin.profile.name;
    const createdAt = moment(admin.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr>
        <td>{admin._id}</td>
        <td><Link to={`/admin/view/${admin._id}`} >{username}</Link></td>
        <td>{name}</td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Admin.PagedList = React.createClass({

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

  admins() {
    if (this.props.admins.length === 0) {
      return (
        <tr>
          <td key={'_'} colSpan="4">{L('text_no_admins')}</td>
        </tr>
      );
    }

    return this.props.admins.map((admin) => (
      <AdminListItem key={admin._id} admin={admin} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_username'), field: 'username' },
      { title: L('label_name'), field: 'profile.name' },
      { title: L('label_created_at'), field: 'createdAt' },
    ];

    const sort = this.props.pagination.get().sort;

    return (
      <Pagination.List className="table-list"
                       listTotal={this.props.adminsCount}
                       listLength={this.props.admins.length}
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
            {this.admins()}
          </tbody>
        </table>
      </Pagination.List>
    )
  }
});
