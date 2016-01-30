/**
 * validate user account
 *
 * Password can NOT be tested at the server side,
 * since it be sent with encrypted format.
 *
 */

var checkUsername = function(value) {
  var regex = /^[a-z0-9]+$/i;
  if (! regex.test(value)) {
    throw new Meteor.Error(ERROR_CODE_MATCH, 'error_invalid_type');
  }
};

var checkPassword = function(value) {
  var regex = /^[A-Za-z0-9!@#$%^&*()_]+$/;
  if (! regex.test(value)) {
    throw new Meteor.Error(ERROR_CODE_MATCH, 'error_invalid_type');
  }
};

var checkEmail = function(value) {
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (! regex.test(value)) {
    throw new Meteor.Error(ERROR_CODE_MATCH, 'error_invalid_type');
  }
};

Admin.Validator = {
  schema: {
    _id: {
      type: 'string',
      required: true,
      minLength: 10,
      maxLength: 30,
    },

    username: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 18,
      custom: checkUsername
    },

    email: {
      type: 'string',
      required: true,
      custom: checkEmail
    },

    password: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 18,
      custom: checkPassword
    },

    name: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    }
  },

  validateInsert: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['username', 'password', 'name']);

    return validator;
  },

  validateUpdate: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['email']);

    return validator;
  },

  validateUpdatePassword: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['_id', 'password']);

    return validator;
  },

  validateUpdateName: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['_id', 'name']);

    return validator;
  }
};

Admin.Match = {
  insert(object) {
    var validation = Admin.Validator.validateInsert(object);
    return _.isEmpty(validation.errors());
  },

  update(object) {
    var validation = Admin.Validator.validateUpdate(object);
    return _.isEmpty(validation.errors());
  },

  updatePassword(object) {
    var validation = Admin.Validator.validateUpdatePassword(object);
    return _.isEmpty(validation.errors());
  },

  updateName(object) {
    var validation = Admin.Validator.validateUpdateName(object);
    return _.isEmpty(validation.errors());
  }
};

