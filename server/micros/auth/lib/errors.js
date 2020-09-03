const AuthenticationError = (message) => {
  this.name = 'AuthenticationError';
  this.message = message;
  this.stack = (new Error()).stack;
  this.status = 401;
};

const ValidationError = (message) => {
  this.name = 'ValidationError';
  this.message = message;
  this.stack = (new Error()).stack;
};

const ForbiddenError = (message) => {
  this.name = 'ForbiddenError';
  this.message = message;
  this.stack = (new Error()).stack;
  this.status = 403;
};


AuthenticationError.prototype = new Error;
ValidationError.prototype = new Error;
ForbiddenError.prototype = new Error;

export {AuthenticationError, ValidationError, ForbiddenError};