const customAPIError = require('../errors/custom-errors');

const errorsHandler = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(statusCode).json({ message: err });
  }
  return res.status(500).json({ message: err });
};

module.exports = errorsHandler;
