
Category.Validator = {
  schema: {
    title: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    },

    seq: {
      type: 'number',
      required: true,
      minLength: 1
    },

    active: {
      type: 'boolean',
      required: true
    }
  },

  validateInsert: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['title']);

    return validator;
  },

  validateUpdate: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['title', 'seq']);

    return validator;
  },

};

Category.Match = {
  insert: (object) => {
    var validation = Category.Validator.validateInsert(object);
    return _.isEmpty(validation.errors());
  },

  update: (object) => {
    var validation = Category.Validator.validateUpdate(object);
    return _.isEmpty(validation.errors());
  }
};
