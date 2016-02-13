const winston = Npm.require("winston");
const winstonMongoDB = Npm.require("winston-mongodb");

const winstonTransportType = function(type) {
  switch (type) {
    case 'file':
      return winston.transports.File;

    case 'dailyFile':
      return winston.transports.DailyRotateFile;

    case 'http':
      return winston.transports.Http;

    case 'mongodb':
      return winston.transports.MongoDB;

    default:
      return winston.transports.Console;
  }
};

Logger = {
  addTransport: function(type, options) {
    return winston.add(winstonTransportType(type), options);
  },

  removeTransport: function(type) {
    return winston.remove(winstonTransportType(type));
  },

  log: function(level, message, metadata = {}) {
    return winston.log(level, message, metadata);
  },

  debug: function(message, metadata = {}) {
    return winston.debug(message, metadata);
  },

  info: function(message, metadata = {}) {
    return winston.info(message, metadata);
  },

  warn: function(message, metadata = {}) {
    return winston.warn(message, metadata);
  },

  error: function(message, metadata = {}) {
    return winston.error(message, metadata);
  },

  getWinston: function() {
    return winston;
  }
};






