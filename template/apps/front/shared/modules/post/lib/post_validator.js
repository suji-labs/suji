
Post.Validator = {
  schema: {
    category: {
      type: 'object',
      required: true,
      object: {
        _id: {
          type: 'string',
          required: true,
          minLength: 1,
          maxLength: 30
        },
        title: {
          type: 'string',
          required: true,
          minLength: 1,
          maxLength: 100
        }
      }
    },

    title: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    },

    content: {
      type: 'object',
      required: true,
      object: {
        version: {
          type: 'string',
          required: true,
          values: ['0.0.1', '0.0.2']
        },
        type: {
          type: 'string',
          required: true,
          values: ['text', 'markdown', 'html']
        },
        data: {
          type: 'string',
          required: true,
          minLength: 1,
          maxLength: 65536
        }
      }
    }
  },

  validateInsert: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['category', 'title', 'content']);

    return validator;
  },

  validateUpdate: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['category', 'title', 'content']);

    return validator;
  },

};

Post.Match = {
  insert: (object) => {
    var validation = Post.Validator.validateInsert(object);
    return _.isEmpty(validation.errors());
  },

  update: (object) => {
    var validation = Post.Validator.validateUpdate(object);
    return _.isEmpty(validation.errors());
  }
};
