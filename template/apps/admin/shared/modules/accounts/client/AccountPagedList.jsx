
const { Link } = ReactRouter;

const AccountListItem = React.createClass({
  render() {
    const account = this.props.account;
    if (! account) return null;

    const name = account.profile && account.profile.name;
    const email = account.emails[0].address;
    const createdAt = moment(account.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr>
        <td>{account._id}</td>
        <td><Link to={`/account/edit/${account._id}`} >{name}</Link></td>
        <td>{email}</td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Account.PagedList = React.createClass({
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

  accounts() {
    if (this.props.accounts.length === 0) {
      return (
        <tr>
          <td key={'_'} colSpan="4">{L('text_no_accounts')}</td>
        </tr>
      );
    }

    return this.props.accounts.map((account) => (
      <AccountListItem key={account._id} account={account} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_name'), field: 'profile.name' },
      { title: L('label_email'), field: 'emails.address' },
      { title: L('label_created_at'), field: 'createdAt' },
    ];

    const sort = this.props.pagination.get().sort;
    const restoreState = !! (this.props.location && this.props.location.state &&
      this.props.location.state.restoreState);

    return (
      <Pagination.List className="table-list"
                       listTotal={this.props.accountsCount}
                       listLength={this.props.accounts.length}
                       pagination={this.props.pagination}
                       loading={this.props.loading}
                       loadMore={L('label_load_more')}
                       restoreState={restoreState} >
        <table className="table table-bordered table-striped">
          <thead>
          <App.TableHeadSort columns={columns}
                             sort={sort}
                             onSort={this.handleSort} />
          </thead>
          <tbody>
            {this.accounts()}
          </tbody>
        </table>
      </Pagination.List>
    )
  }
});
