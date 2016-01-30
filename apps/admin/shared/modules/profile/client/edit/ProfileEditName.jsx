
Profile.EditName = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const profileName = e.target['profile-name'].value;

    return this.props.onSubmit(profileName);
  },

  componentDidMount() {
    $('form input:first').focus();
  },

  render() {
    return (
      <div className="accounts-ui-frame">
        <Form.Form id="form-change-name" onSubmit={this.handleSubmit}>
          <Form.InputText id="profile-name"
                          name="profile-name"
                          value={this.props.profileName}
                          placeholder={L('label_name')} />

          <Form.Button type="submit"
                       className="btn btn-primary btn-block">
            {L('command_save')}
          </Form.Button>
        </Form.Form>
      </div>
    )
  }
});
