
const modes = {
  new: {
    subTitle: 'label_new',
    submitText: 'command_register',
  },

  edit: {
    subTitle: 'label_edit',
    submitText: 'command_save',
  }
};

Post.Form = React.createClass({
  getDefaultProps() {
    return {
      errors: []
    }
  },

  errorMessage(attribute) {
    if (this.props.errors && this.props.errors.length > 0) {
      const error = _.find(this.props.errors,
        (error) => (error.attribute === attribute));

      if (error) {
        return _.reduce(error.messages, (value, msg) => value + msg, "");
      }
    }

    return "";
  },

  handleSubmit(e) {
    e.preventDefault();

    const categoryId = e.target.categoryId.value;
    const title = e.target.title.value;
    const content = e.target.content.value;

    this.props.onSubmit(categoryId, title, content);
  },

  handleCancel(e) {
    console.log('cancel button');
    e.preventDefault();

    this.props.onCancel();
  },

  componentDidMount() {
    Meteor.setTimeout(() => $('form input:first').focus(), 400);
  },

  render() {
    if (this.props.loading) return <App.Spinner />;

    const categoryId = this.props.post && this.props.post.category._id;
    const title = this.props.post && this.props.post.title;
    const content = this.props.post && this.props.post.content;
    const contentText = content && content.data;
    const selectOptions = this.props.categories.map((category) => {
      return { value: category._id, title: category.title };
    });

    return (
      <App.Page >
        <header>
          <h3>{L('label_post')} <small>{L(modes[this.props.mode].subTitle)}</small></h3>
        </header>

        <section className="form-frame">
          <Form.Form onSubmit={this.handleSubmit}>
            <Form.Select id="categoryId"
                         name="categoryId"
                         value={categoryId}
                         options={selectOptions}
                         label={L('label_category')}
                         error={this.errorMessage('categoryId')} />

            <Form.InputText id="title"
                            name="title"
                            value={title}
                            label={L('label_title')}
                            error={this.errorMessage('title')} />

            <Form.MarkdownEditor id="content"
                                 name="content"
                                 value={contentText}
                                 label={L('label_content')}
                                 error={this.errorMessage('content')}
                                 rows="10" />

            <Form.Actions>
              <Form.Button type="submit" className="btn btn-primary">
                {L(modes[this.props.mode].submitText)}
              </Form.Button>
              <Form.Button className="btn btn-default"
                           onClick={this.handleCancel} >
                {L('command_cancel')}
              </Form.Button>
            </Form.Actions>
          </Form.Form>
        </section>
      </App.Page>
    )
  }
});
