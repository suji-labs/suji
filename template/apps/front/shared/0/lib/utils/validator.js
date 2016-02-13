/**
 * validate
 *    type:     String, Number, Boolean, Array, Object
 *    null
 *    min
 *    max
 *    custom
 *
 * @type {{}}
 */
Validator = function(schema) {

  var _schema = schema;
  var _errors = [];

  this.schema = function(attribute) {
    var object = _schema;
    var path = attribute.split(".");
    for (var i = 0; i < path.length; i++) {
      object = object[path[i]];
    }
    return object;
  };

  // get all errors
  this.errors = function() {
    return _errors;
  };

  // set a new error
  this.setError = function(attribute, message) {

    var _findError = function(attribute) {
      for (var i = 0; i < _errors.length; i++) {
        if (_errors[i].attribute === attribute) {
          return _errors[i];
        }
      }
      return null;
    };

    var error = _findError(attribute);
    if (! error) {
      error = {
        attribute: attribute,
        messages: [ message ]
      };

      _errors.push(error);
    } else {
      error.messages.push(message);
    }
  };

  this.hasError = function() {
    return (_errors && _errors.length > 0);
  };

  this.validate = function(object, attributes, parent) {
    var self = this;

    var base = (! parent) ? "" : parent + ".object.";

    if (! _.isArray(attributes)) {
      attributes = [ attributes ];
    }

    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];

      var rule = self.schema(base + attribute);
      var value = object[attribute];

      if (! value) {
        if (rule.required) {
          self.setError(base + attribute, "error_input_required");
        }
        continue;
      }

      if (typeof value !== rule.type) {
        self.setError(base + attribute, "error_invalid_type");
        continue;
      }

      switch (rule.type) {
        case 'string':
          if (rule.values && rule.values.length > 0) {
            if (! _.contains(rule.values, value)) {
              self.setError(base + attribute, "error_invalid_input");
            }
          }

          if ((rule.minLength && value.length < rule.minLength) ||
            (rule.maxLength && value.length > rule.maxLength)) {
            self.setError(base + attribute, "error_out_of_range");
          }
          break;

        case 'object':
          this.validate(value, Object.keys(value), attribute);
          break;
      }

      if (rule.custom && typeof rule.custom === 'function') {
        try {
          rule.custom(value);
        } catch (ex) {
          self.setError(base + attribute, ex.message);
        }
      }
    }
  };
};

